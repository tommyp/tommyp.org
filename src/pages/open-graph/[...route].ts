import { OGImageRoute } from 'astro-og-canvas';
import { publishedPosts } from '../../lib/posts';

const pages = Object.fromEntries(publishedPosts.map(({ slug, data }) => [slug, data]));

const hexToRgbArray = (hex: string): [any, any, any] => {
	let color = hex;
	if (color.length === 4) {
		color = '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
	}

	const bigint = parseInt(color.replace('#', ''), 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;
	return [r, g, b];
};

export const { getStaticPaths, GET } = OGImageRoute({
	pages: pages,
	param: 'route',
	getImageOptions: (path, page) => ({
		title: page.title,
		description: page.subtitle,
		/** Writing direction. Default: `'ltr'`. Set to `'rtl'` for Arabic, Hebrew, etc. */

		/** Optional site logo. Displayed at the top of the card. */
		// logo?: {
		// 	/** Path to the logo image file, e.g. `'./src/logo.png'` */
		// 	path: string;

		// 	/**
		// 	 * Size to display logo at.
		// 	 * - `undefined` — Use original image file dimensions. (Default)
		// 	 * - `[width]` — Resize to the specified width, height will be
		// 	 *               resized proportionally.
		// 	 * - `[width, height]` — Resized to the specified width and height.
		// 	 */
		// 	size?: [width?: number, height?: number];
		// };

		// /**
		//  * Array of `[R, G, B]` colors to use in the background gradient,
		//  * e.g. `[[255, 0, 0], [0, 0, 255]]` (red to blue).
		//  * For a solid color, only include a single color, e.g. `[[0, 0, 0]]`
		//  */
		bgGradient: [hexToRgbArray(page.titleBgColor)],

		// /** Border config. Highlights a single edge of the image. */
		// border?: {
		// 	/** RGB border color, e.g. `[0, 255, 0]`. */
		// 	color?: RGBColor;

		// 	/** Border width. Default: `0`. */
		// 	width?: number;

		// 	/** Side of the image to draw the border on. Inline start/end respects writing direction. */
		// 	side?: LogicalSide;
		// };

		// /** Optional background image. */
		// bgImage?: {
		// 	/** Path to the background image file, e.g. `'./src/background.png'`. */
		// 	path: string;

		// 	/** How the background image should resize to fit the container. (Default: `'none'`) */
		// 	fit?: 'cover' | 'contain' | 'none' | 'fill';

		// 	/**
		// 	 * How the background image should be positioned in the container. (Default: `'center'`)
		// 	 *
		// 	 * The value is either a shorthand for both block and inline directions, e.g. `'center'`,
		// 	 * or a tuple of `[blockPosition, inlinePosition]`, e.g. `['end', 'center']`.
		// 	 */
		// 	position?: LogicalPosition | [LogicalPosition, LogicalPosition];
		// };

		// /** Amount of padding between the image edge and text. Default: `60`. */
		// padding?: number;

		// /** Font styles. */
		// font?: {
		// 	/** Font style for the page title. */
		// 	title?: FontConfig;

		// 	/** Font style for the page description. */
		// 	description?: FontConfig;
		// };

		font: {
			title: {
				family: 'Inter',
				size: 96,
				color: hexToRgbArray(page.titleColor)
			},
			description: {
				family: 'Inter',
				size: 48,
				color: hexToRgbArray(page.titleColor)
			}
		},

		// /**
		//  * Array of font URLs or file paths to load and use when rendering text,
		//  * e.g. `['./src/fonts/local-font.ttf', 'https://example.com/cdn/remote-font.ttf']`
		//  * Local font paths are specified relative to your project’s root.
		//  */
		// fonts?: string[];
		fonts: ['./src/fonts/Inter-Regular.woff2', './src/fonts/Inter-Bold.woff2']

		// /**
		//  * Directory to cache images in across builds.
		//  * Default: `./node_modules/.astro-og-canvas`
		//  * Set to `false` to disable caching.
		//  */
		// cacheDir?: string | false;
		// }
	})
});
