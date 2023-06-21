<script lang="ts">
	import type { PostSummary } from '$lib/types';
	import BigBlockLink from '$lib/components/BigBlockLink.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import Head from '$lib/components/Head.svelte';
	import BigBlock from '$lib/components/BigBlock.svelte';
	import Marquee from 'svelte-marquee';
	import Hero from '$lib/components/Hero.svelte';

	export let data: { posts: Array<PostSummary> };

	$: recentPosts = data.posts.slice(0, 5);
</script>

<Head />
<section>
	<Hero />
	<div class="blog">
		<a class="blog-link" href="/blog"><h2><span>Blog posts</span> &rarr;</h2> </a>
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
		</Grid>
	</div>
</section>

<style>
	section {
		margin-top: 0rem;
		display: flex;
		flex-direction: column;
	}

	.blog {
		padding: 1rem;
	}

	.blog-link {
		align-items: center;
		border: 2px solid #000;
		color: #000;
		border-radius: 2rem;
		text-decoration: none;
		text-transform: uppercase;
		display: inline-block;
		font-size: 2rem;
		padding: 0 2rem;
		flex-grow: 0;
		margin-bottom: 1rem;
	}

	.blog-link:hover {
		background: var(--white);
		color: var(--near-black);
		border-radius: 0;
	}

	.blog-link span {
		transition: all 0.2s ease-in-out;
	}

	.blog-link:hover span {
		padding-right: 2rem;
	}

	@media screen and (min-width: 968px) {
		.blog {
			margin: 2rem 0;
			padding: 0 4rem;
		}
	}
</style>
