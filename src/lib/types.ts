export interface Post {
	title: string;
	date: string;
	content: string;
	titleColor: string;
	inverse: boolean;
}

export interface PostSummary {
	path: string;
	meta: {
		title: string;
		subtitle: string;
		titleColor: string;
		inverse: boolean;
	};
}
