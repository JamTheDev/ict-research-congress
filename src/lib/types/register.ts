import { authorSchema } from '$lib/schemas';
import type { z } from 'zod';

export type Author = z.infer<typeof authorSchema>;
