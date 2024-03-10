import type { PageServerLoad } from './$types';
import { superValidate, withFiles } from 'sveltekit-superforms';
import { registerSchema } from '$lib/schemas';
import { zod } from 'sveltekit-superforms/adapters';
import { fail, type Actions } from '@sveltejs/kit';
import { supabase } from '$lib/server/supabase';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(registerSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(registerSchema));

		console.log('REGISTER: ', form.data);

		if (!form.valid) {
			console.log('Invalid form data.');

			return fail(
				400,
				withFiles({
					form,
					success: false,
					message: 'Invalid form data.'
				})
			);
		}

		const paymentFileName = `${form.data.email}_PAYMENT`;

		const { error: storageError } = await supabase.storage
			.from('payments')
			.upload(paymentFileName, form.data.payment_image, {
				cacheControl: '3600',
				upsert: true
			});

		if (storageError) {
			console.log(`STORAGE ERROR: ${storageError.message}`);

			return withFiles({
				form,
				success: false,
				message: `STORAGE ERROR: ${storageError.message}`
			});
		}

		const paymentImageUrl = `${PUBLIC_SUPABASE_URL}/storage/v1/object/public/payments/${paymentFileName}`;

		const { error: insertError } = await supabase.from('participants').insert({
			first_name: form.data.first_name,
			last_name: form.data.last_name,
			email: form.data.email,
			payment_image_url: paymentImageUrl
		});

		if (insertError) {
			console.log(`INSERT ERROR ${insertError.code}: ${insertError.message}`);

			return withFiles({
				form,
				success: false,
				message: `INSERT ERROR ${insertError.code}: ${insertError.message}`
			});
		}

		console.log('Successfully registered!');

		return withFiles({
			form,
			success: true,
			message: 'Successfully registered!'
		});
	}
};
