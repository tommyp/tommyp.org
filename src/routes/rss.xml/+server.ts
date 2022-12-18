export const prerender = true;
import type { RequestHandler } from '@sveltejs/kit';
import RSS from 'rss';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { fetchMarkdownPosts } from '$lib/utils';

const allPosts = await fetchMarkdownPosts().then((posts) => {
	return posts.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	});
});

// const render = async () => {
// 	return {
// 		version: 'https://jsonfeed.org/version/1.1',
// 		title: 'Tommy Palmer | Web Developer based in London',
// 		home_page_url: 'https://tommyp.org',
// 		feed_url: `${new URL(`feed.json`, 'https://tommyp.org').href}`,
// 		description: '',
// 		icon: 'https://tommyp.org/favicon-32x32.png',
// 		favicon: `${new URL(`favicon-32x32.png`, 'https://tommyp.org').href}`,
// 		authors: [
// 			{
// 				name: 'Tommy Palmer',
// 				url: 'https://tommyp.org',
// 				avatar: 'https://tommyp.org/favicon-32x32.png'
// 			}
// 		],
// 		language: 'en',
// 		items: allposts.map((post) => {
// 			// console.log(post);

// 			return {
// 				id: post.path,
// 				url: `${new URL(`${post.path}`, 'https://tommyp.org').href}`,
// 				title: post.meta.title,
// 				summary: post.meta.subtitle,
// 				date_published: post.meta.date,
// 				content_text: post.content,
// 				content_html: post.content
// 				// tags: post.tags
// 				// 	?.map((c: string | string[] | { string: string } | { string: string[] }) => {
// 				// 		if (typeof c === 'string') return c;
// 				// 		if (Array.isArray(c)) {
// 				// 			return c.map((v) => {
// 				// 				return v;
// 				// 			});
// 				// 		}
// 				// 		const [key, value] = Object.entries(c)[0];
// 				// 		if (Array.isArray(value)) {
// 				// 			return value.map((v) => {
// 				// 				return `${key}-${v}`;
// 				// 			});
// 				// 		}
// 				// 		return `${key}-${value}`;
// 				// 	})
// 				// 	.flat()
// 			};
// 		})
// 	};
// };

export const GET: RequestHandler = async () => {
	const feed = new RSS({
		title: 'Tommy Palmer | Web Developer based in London',
		site_url: 'https://tommyp.org',
		feed_url: 'https://tommyp.org' + '/rss.xml'
	});

	allPosts.forEach((post) => {
		feed.item({
			title: post.meta.title,
			url: 'https://tommyp.org' + `/${post.path}`,
			date: post.meta.date,
			description: post.meta.sumarry
		});
	});

	return new Response(feed.xml({ indent: true }), {
		headers: {
			'Cache-Control': `max-age=0, s-maxage=${600}`, // 10 minutes
			'Content-Type': 'application/rss+xml'
		}
	});
};
