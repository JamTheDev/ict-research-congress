import { z } from 'zod';

const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/avif'];
const MAX_IMAGE_SIZE = 5; // Megabytes

function sizeInMB(sizeInBytes: number, decimals = 2): number {
	const result = sizeInBytes / (1024 * 1024);
	return +result.toFixed(decimals);
}

export const registerSchema = z.object({
	email: z.string().email(),
	first_name: z.string(),
	last_name: z.string(),
	payment_image: z
		.instanceof(File, { message: 'Image is required.' })
		.refine(
			(f) => sizeInMB(f.size) <= MAX_IMAGE_SIZE,
			`The maximum file size is ${MAX_IMAGE_SIZE} MB.`
		)
		.refine((file) => {
			return ACCEPTED_IMAGE_TYPES.includes(file.type);
		}, `Only .jpg, .jpeg, .png, .webp, and .avif files are accepted.`)
});

export type RegisterSchema = typeof registerSchema;
