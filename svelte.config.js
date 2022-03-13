import adapter from '@sveltejs/adapter-netlify';
import { isoImport } from 'vite-plugin-iso-import';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		vite: {
			plugins: [isoImport()]
		}
	},
	experimental: {
		useVitePreprocess: true
	},
	extensions: ['.svelte', '.md'],
	extends: './.svelte-kit/tsconfig.json',

	preprocess: [
		mdsvex({
			extensions: ['.md'],
			layout: {
				work: 'src/routes/work/_post.svelte'
			}
		})
	]
};

export default config;
