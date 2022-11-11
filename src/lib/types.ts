export interface Post {
	title: string;
	date: string;
	content: string;
	titleColor: string;
}

export interface PostSummary {
	path: string;
	meta: {
		title: string;
		subtitle: string;
		titleColor: string;
	};
}
