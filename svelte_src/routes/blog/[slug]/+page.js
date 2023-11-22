/** @type {import('../../../../.svelte-kit/types/src/routes/blog/[slug]/$types').PageLoad} */
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, subtitle, date, titleBgColor, inverse, titleColor } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		subtitle,
		titleBgColor,
		titleColor,
		date,
		inverse
	};
}
