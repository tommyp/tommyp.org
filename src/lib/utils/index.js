export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			const post = await resolver();

			const { metadata } = post;

			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath,
				content: post.default.render()
			};
		})
	);

	return allPosts;
};
