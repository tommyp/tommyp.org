import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const categories = [
	'apple',
	'blog',
	'books',
	'conference',
	'culture',
	'design',
	'dev',
	'elixir',
	'film',
	'food',
	'internet',
	'ireland',
	'list',
	'london',
	'media',
	'monthnotes',
	'movies',
	'music',
	'personal',
	'politics',
	'productivity',
	'pubs',
	'rss',
	'software',
	'tech',
	'travel',
	'tv',
	'ui',
	'ux',
	'videogames',
	'yearnotes',
	'web',
	'work',
	'world'
];

const blogCollection = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		date: z.date(),
		subtitle: z.string().optional(),
		titleColor: z.string().optional(),
		titleBgColor: z.string().optional(),
		categories: z.array(z.enum(categories)),
		draft: z.boolean().optional()
	})
});

export const collections = {
	blog: blogCollection
};
