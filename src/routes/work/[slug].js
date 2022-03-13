import fs from 'fs';

/** @type {import('./[slug]').RequestHandler} */
export async function get({ params }) {
	const { slug } = params;

	const md = fs.readFileSync(`src/lib/markdown/${slug}.md`).toString();

	if (md) {
		return {
			body: { md }
		};
	}

	return {
		status: 404
	};
}
