import { text, timestamp, pgTable, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: uuid('id').unique().primaryKey().defaultRandom(),
	name: text('name').notNull(),
	email: text('email').unique().notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull()
});
