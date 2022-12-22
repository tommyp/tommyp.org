/** @type {import('../../../../.svelte-kit/types/src/routes/blog/[slug]/$types').PageLoad} */
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, titleColor, inverse } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		titleColor,
		date,
		inverse
	};
}
