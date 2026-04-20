import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';
import { PostCategories } from './lib/types';

const blogCollection = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		date: z.date(),
		subtitle: z.string().optional(),
		titleColor: z.string().optional(),
		titleBgColor: z.string().optional(),
		categories: z.array(z.string()),
		draft: z.boolean().optional()
	})
});

export const collections = {
	blog: blogCollection
};
