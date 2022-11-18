import { html as toReactNode } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import DMSans from '$lib/fonts/DMSans-Bold.ttf';
import OpenGraph from '$lib/components/OpenGraph.svelte';
import satori from 'satori';
import type { RequestHandler } from './$types';
import type { SvelteComponent } from 'svelte';

const height = 630;
const width = 1200;

export const GET: RequestHandler = async () => {
	const result: SvelteComponent = OpenGraph.render();

	const element = toReactNode(`${result.html}<style>${result.css.code}</style>`);

	const svg = await satori(element, {
		fonts: [
			{
				name: 'DM Sans',
				data: Buffer.from(DMSans),
				style: 'normal'
			}
		],
		height,
		width
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width
		}
	});

	const image = resvg.render();

	return new Response(image.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
};
