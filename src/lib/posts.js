import { getCollection } from 'astro:content';

const allPosts = (await getCollection('blog')).sort((a, b) => {
	return a.data.date < b.data.date ? 1 : -1;
});
const publishedPosts = allPosts.filter((post) => !post.data.draft);

export { allPosts, publishedPosts };
