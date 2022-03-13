import fs from 'fs';

/** @type {import('./[id]').RequestHandler} */
export async function get({ params }) {
	// `params.id` comes from [id].js

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
