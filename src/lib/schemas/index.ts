import { z } from 'zod';

const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/avif'];
const MAX_IMAGE_SIZE = 5; // Megabytes

function sizeInMB(sizeInBytes: number, decimals = 2): number {
	const result = sizeInBytes / (1024 * 1024);
	return +result.toFixed(decimals);
}

export type RegisterSchema = typeof registerSchema;

export const authorSchema = z.object({
	first_name: z.string(),
	middle_name: z.string().optional(),
	last_name: z.string()
});

export const presenterSchema = authorSchema.extend({
	contact_number: z.string(),
	email: z.string().email()
});

export const registerSchema = z.object({
	authors: authorSchema.array(),
	presenter: presenterSchema,
	paper_title: z.string(),
	affiliation: z.string(),
	payment_mode: z.string(),
	receipt_image: z
		.instanceof(File, { message: 'Image is required.' })
		.refine(
			(f) => sizeInMB(f.size) <= MAX_IMAGE_SIZE,
			`The maximum file size is ${MAX_IMAGE_SIZE} MB.`
		)
		.refine((file) => {
			return ACCEPTED_IMAGE_TYPES.includes(file.type);
		}, `Only .jpg, .jpeg, .png, .webp, and .avif files are accepted.`)
});
