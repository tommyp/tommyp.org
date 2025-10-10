import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.date(),
		subtitle: z.string().optional(),
		titleColor: z.string().optional(),
		titleBgColor: z.string().optional(),
		categories: z.array(
			z.enum([
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
			])
		),
		draft: z.boolean().optional()
	})
});

export const collections = {
	blog: blogCollection
};
