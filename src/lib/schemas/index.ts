import { z } from 'zod';

export const registerSchema = z.object({
	email: z.string().email(),
	first_name: z.string(),
	last_name: z.string()
});

export type RegisterSchema = typeof registerSchema;
