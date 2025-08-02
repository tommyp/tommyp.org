import { getCollection } from 'astro:content';
import type { Post } from './types';

const allPosts = ((await getCollection('blog')) as Post[]).sort((a, b) => {
	return a.data.date < b.data.date ? 1 : -1;
});
const publishedPosts = allPosts.filter((post) => !post.data.draft);

const categories = publishedPosts
	.reduce<string[]>((acc, post) => {
		return acc.concat(post.data.categories);
	}, [])
	.filter((value, index, array) => array.indexOf(value) === index)
	.sort();

export { allPosts, categories, publishedPosts };
