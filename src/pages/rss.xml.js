import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { publishedPosts } from '../lib/posts';
const parser = new MarkdownIt();

export async function GET(context) {
	return rss({
		// `<title>` field in output xml
		title: "Tommy Palmer's Blog",
		// `<description>` field in output xml
		description:
			'Notes on web development, design, videogames, and other random things I find interesting.',
		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#contextsite
		site: context.site,
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and glob imports
		items: publishedPosts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.subtitle,

			// Compute RSS link from post `slug`
			// This example assumes all posts are rendered as `/blog/[slug]` routes
			link: `/blog/${post.slug}/`,
			content: sanitizeHtml(parser.render(post.body), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
			})
		})),

		// (optional) inject custom xml
		customData: `<language>en-gb</language>`
	});
}
