export const prerender = true;
import type { RequestHandler } from '@sveltejs/kit';
import type { Post } from '$lib/types';
import LZString from 'lz-string';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import postsjson from '$generated/posts.json';
import { fetchMarkdownPosts } from '$lib/utils';

const _allposts = fetchMarkdownPosts().then((posts) => {
	return posts.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	});
});

const render = async () => {
	return {
		version: 'https://jsonfeed.org/version/1.1',
		title: 'Tommy Palmer | Web Developer based in London',
		home_page_url: 'https://tommyp.org',
		feed_url: `${new URL(`feed.json`, 'https://tommyp.org').href}`,
		description: '',
		icon: 'https://tommyp.org/favicon-32x32.png',
		favicon: `${new URL(`favicon-32x32.png`, 'https://tommyp.org').href}`,
		authors: [
			{
				name: 'Tommy Palmer',
				url: 'https://tommyp.org',
				avatar: 'https://tommyp.org/favicon-32x32.png'
			}
		],
		language: 'en',
		items: _allposts.map((e) => {
			return {
				id: e[1].slug,
				url: `${new URL(`${e[1].slug}`, siteConfig.url).href}`,
				title: e[1].title,
				summary: e[1].summary,
				image: e[1].cover,
				date_published: e[1].published,
				date_modified: e[1].updated,
				content_text: e[1].content && LZString.decompressFromBase64(e[1].content),
				content_html: e[1].html && LZString.decompressFromBase64(e[1].html),
				tags: e[1].tags
					?.map((c: string | string[] | { string: string } | { string: string[] }) => {
						if (typeof c === 'string') return c;
						if (Array.isArray(c)) {
							return c.map((v) => {
								return v;
							});
						}
						const [key, value] = Object.entries(c)[0];
						if (Array.isArray(value)) {
							return value.map((v) => {
								return `${key}-${v}`;
							});
						}
						return `${key}-${value}`;
					})
					.flat()
			};
		})
	};
};

export const GET: RequestHandler = async () =>
	new Response(JSON.stringify(await render(), null, 2), {
		headers: {
			'Content-Type': 'application/feed+json; charset=utf-8'
		}
	});
