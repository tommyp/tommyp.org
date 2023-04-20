<script lang="ts">
	import type { PostSummary } from '$lib/types';
	import BigBlockLink from '$lib/components/BigBlockLink.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import Head from '$lib/components/Head.svelte';
	import BigBlock from '$lib/components/BigBlock.svelte';
	import Marquee from 'svelte-marquee';

	export let data: { posts: Array<PostSummary> };

	$: recentPosts = data.posts.slice(0, 3);
</script>

<Head />
<section>
	<h2 class="hero">
		I'm a creative web developer writing JavaScript and Elixir at <a
			class="castrooms"
			href="https://castrooms.com/">CastRooms</a
		>. I build fun things like <a class="lineup" href="https://lineup.fun">Lineup.fun</a>
		and <a class="shorts" href="https://www.isitshortsweathertoday.com">Shorts Weather</a>.
	</h2>

	<div class="blog">
		<Grid>
			{#each recentPosts as recentPost}
				<BigBlockLink
					href={recentPost.path}
					title={recentPost.meta.title}
					subtitle={recentPost.meta.subtitle}
					inverse={recentPost.meta.inverse}
					--color={recentPost.meta.titleBgColor}
					--foreground={recentPost.meta.titleColor}
					--grid-col-start="1"
					--grid-col-end="13"
				/>
			{/each}

			<BigBlockLink
				href="/blog"
				title="More →"
				--grid-col-start="5"
				--grid-col-end="9"
				--color="#000"
				--foreground="#fff"
			/>
		</Grid>
	</div>
</section>

<style>
	section {
		margin-top: 0rem;
		display: flex;
		flex-direction: column;
		padding: 2rem;
	}

	.hero {
		font-weight: bold;
		font-family: var(--header-font-family);
		grid-column-start: 1;
		grid-column-end: 13;
		color: var(--near-black);
		padding: 0.5rem 0;
		font-size: 4.5rem;
		margin: 0;
		font-weight: bold;
		text-shadow: 0 0 0.05rem var(--background);
	}

	span {
		display: inline-block;
	}

	span:hover {
		/* shake animation */
		transition: all;
		animation: wave-hand 0.5s infinite;
	}

	.lineup {
		--color: #95fc0f;
	}

	.shorts {
		--color: #f56c42;
	}

	.castrooms {
		--color: #e1e600;
	}

	.hero a {
		color: var(--near-black);
		text-decoration-color: var(--color);
	}

	.hero a:hover {
		color: var(--color);
	}

	.blog {
		padding-bottom: 1rem;
	}

	/* shake animation */

	@media screen and (min-width: 968px) {
		.hero {
			padding-top: 1.5rem;
			line-height: 1.2;
		}

		h2 {
			font-size: 4.5rem;
		}

		.marquee {
			font-size: 3.5rem;
			border-top-width: 6px;
			border-bottom-width: 6px;
		}

		.blog {
			margin-top: 5rem;
			margin-bottom: 2rem;
		}
	}
</style>
