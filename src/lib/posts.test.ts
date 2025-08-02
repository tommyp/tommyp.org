import { describe, it, expect, vi, beforeAll } from 'vitest';
import { allPosts, publishedPosts, categories } from './posts';

// Mock data for getCollection

// Import after mocking

describe('posts.ts', () => {
	beforeAll(async () => {
		// Mock astro:content

		vi.mock('astro:content', () => ({
			getCollection: vi.fn().mockResolvedValue([
				{
					data: {
						date: new Date('2023-01-01'),
						draft: false,
						categories: ['tech', 'astro']
					},
					slug: 'post-1'
				},
				{
					data: {
						date: new Date('2023-02-01'),
						draft: true,
						categories: ['life']
					},
					slug: 'post-2'
				},
				{
					data: {
						date: new Date('2023-03-01'),
						draft: false,
						categories: ['astro']
					},
					slug: 'post-3'
				}
			])
		}));
		// Await the promises in the module
		await Promise.resolve();
	});

	it('should sort allPosts by date descending', async () => {
		expect(allPosts[0].data.date).toEqual(new Date('2023-03-01'));
		expect(allPosts[1].data.date).toEqual(new Date('2023-02-01'));
		expect(allPosts[2].data.date).toEqual(new Date('2023-01-01'));
	});

	it('should filter out draft posts in publishedPosts', async () => {
		expect(publishedPosts.length).toBe(2);
		expect(publishedPosts.every((post) => post.data.draft === false)).toBe(true);
	});

	it('should extract unique, sorted categories from publishedPosts', async () => {
		expect(categories).toEqual(['astro', 'tech']);
	});

	it('should not include categories from draft posts', async () => {
		expect(categories).not.toContain('life'); // 'life' from draft post-2 should not be included
		// But 'life' from post-3 (not draft) is included, so this test is not correct.
		// Let's check that only categories from publishedPosts are included:
		const publishedCategories = publishedPosts.flatMap((p) => p.data.categories);
		categories.forEach((cat) => {
			expect(publishedCategories).toContain(cat);
		});
	});
});
