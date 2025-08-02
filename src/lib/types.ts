import type { RenderResult } from 'astro:content';

export interface Post {
	slug: string;
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
