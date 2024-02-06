import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server';
import { users } from '$lib/server/schema';
import { sql } from 'drizzle-orm';

export const load: PageServerLoad = async () => {};

export const actions: Actions = {
	insert: async () => {
		const newUser = await db
			.insert(users)
			.values({
				name: 'John Doe',
				email: 'myemail@gmail.com'
			})
			.returning();

		console.log('INSERT with ORM');
		console.log(newUser);

		const newUserWithSql = await db.execute(
			sql`INSERT INTO users (name, email) VALUES (${'Hatsune Miku'}, ${'miku@gmail.com'}) RETURNING *`
		);

		console.log('\nINSERT with raw SQL');
		console.log(newUserWithSql);
	}
};
