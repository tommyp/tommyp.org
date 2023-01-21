export interface Post {
	title: string;
	date: string;
	content: string;
	titleBgColor: string;
	inverse: boolean;
}

export interface PostSummary {
	path: string;
	meta: {
		title: string;
		subtitle: string;
		titleBgColor: string;
		inverse: boolean;
	};
}
