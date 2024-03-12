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

		// Receipt
		const receiptFileName = `${form.data.presenter.first_name} ${form.data.presenter.last_name} - ${form.data.paper_title} - RECEIPT`;

		const { error: storageError } = await supabase.storage
			.from('receipts')
			.upload(receiptFileName, form.data.receipt_image, {
				cacheControl: '3600',
				upsert: true
			});

		if (storageError) {
			console.log(`STORAGE ERROR: ${storageError.message}`);

			return fail(
				500,
				withFiles({
					form,
					success: false,
					message: `STORAGE ERROR: ${storageError.message}`
				})
			);
		}

		const receiptImageUrl = `${PUBLIC_SUPABASE_URL}/storage/v1/object/public/receipts/${receiptFileName}`;

		// Paper
		const { data: paperData, error: paperError } = await supabase
			.from('papers')
			.insert({
				title: form.data.paper_title
			})
			.select('id')
			.single();

		if (paperError) {
			console.log(`INSERT ERROR ${paperError.code}: ${paperError.message}`);

			return fail(
				+paperError.code,
				withFiles({
					form,
					success: false,
					message: `INSERT ERROR ${paperError.code}: ${paperError.message}`
				})
			);
		}

		form.data.authors = form.data.authors.map((author) => {
			return {
				...author,
				paper_id: paperData.id
			};
		});

		// Authors
		const { error: authorsError } = await supabase.from('authors').insert(form.data.authors);

		if (authorsError) {
			console.log(`INSERT ERROR ${authorsError.code}: ${authorsError.message}`);

			return fail(
				+authorsError.code,
				withFiles({
					form,
					success: false,
					message: `INSERT ERROR ${authorsError.code}: ${authorsError.message}`
				})
			);
		}

		// Presenter
		const { error: presenterError } = await supabase.from('presenters').insert({
			...form.data.presenter,
			paper_id: paperData.id
		});

		if (presenterError) {
			console.log(`INSERT ERROR ${presenterError.code}: ${presenterError.message}`);

			return fail(
				+presenterError.code,
				withFiles({
					form,
					success: false,
					message: `INSERT ERROR ${presenterError.code}: ${presenterError.message}`
				})
			);
		}

		// Registration entry
		const { error: entryError } = await supabase.from('entries').insert({
			receipt_url: receiptImageUrl,
			paper_id: paperData.id
		});

		if (entryError) {
			console.log(`INSERT ERROR ${entryError.code}: ${entryError.message}`);

			return fail(
				+entryError.code,
				withFiles({
					form,
					success: false,
					message: `INSERT ERROR ${entryError.code}: ${entryError.message}`
				})
			);
		}

		console.log('Successfully registered!');

		return withFiles({
			form,
			success: true,
			message: 'Successfully registered!'
		});
	}
};
