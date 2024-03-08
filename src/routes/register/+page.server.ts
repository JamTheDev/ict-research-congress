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
