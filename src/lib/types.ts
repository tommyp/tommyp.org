export interface Post {
	title: string;
	date: string;
	content: string;
}

export interface PostSummary {
	path: string;
	meta: {
		title: string;
	};
}
