import type { RenderResult } from 'astro:content';

export interface Post {
	id: string;
	data: PostData;
	body: string;
	collection: 'blog';
	render: () => Promise<RenderResult>;
}

export interface PostData {
	title: string;
	subtitle: string;
	titleColor: string;
	titleBgColor: string;
	date: Date;
	draft: boolean;
	categories: string[];
}

export enum PostCategories {
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
}

export interface SpotifyPlayerResponse {
	is_playing: boolean;
	item: {
		name: string;
		artists: { name: string }[];
		album: {
			name: string;
			images: { url: string }[];
		};
		external_urls: {
			spotify: string;
		};
		duration_ms: number;
	};
	progress_ms: number;
}
