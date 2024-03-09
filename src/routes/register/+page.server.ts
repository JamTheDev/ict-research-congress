import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { registerSchema } from '$lib/schemas';
import { zod } from 'sveltekit-superforms/adapters';
import { fail, type Actions } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(registerSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(registerSchema));

		console.log(form.data);

		// NOTE: Find some way to exclude the file since returning it would result in a deserialization error.
		form.data = {
			email: form.data.email,
			first_name: form.data.first_name,
			last_name: form.data.last_name
		};

		if (!form.valid) {
			return fail(400, {
				// Always return `form`
				form
			});
		}

		// If form is valid, insert it to the database

		return {
			form
		};
	}
};
