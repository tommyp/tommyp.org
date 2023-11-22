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
	<Wrapper>
		<div class="blog">
			<a class="blog-link" href="/blog"
				><h2><span class="text">Blog posts</span> <span class="arrow">&rarr;</span></h2>
			</a>
			<Grid>
				{#each recentPosts as recentPost}
					<BigBlockLink
						href={recentPost.path}
						title={recentPost.meta.title}
						subtitle={recentPost.meta.subtitle}
						inverse={recentPost.meta.inverse}
						date={recentPost.meta.date}
						--color={recentPost.meta.titleBgColor}
						--foreground={recentPost.meta.titleColor}
						--grid-col-start="1"
						--grid-col-end="13"
					/>
				{/each}
			</Grid>
		</div>
	</Wrapper>
</section>

<style>
	section {
		margin-top: 0rem;
		display: flex;
		flex-direction: column;
	}

	.blog-link {
		align-items: center;
		border: 2px solid #000;
		color: #000;
		border-radius: 2rem;
		text-decoration: none;
		text-transform: uppercase;
		display: inline-block;
		font-size: 1rem;
		padding: 0.5rem 2rem;
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

	.blog-link .arrow {
		display: inline-block;
		transform: rotate(90deg);
		transition: all 0.2s ease-in-out;
	}

	.blog-link:hover .arrow {
		transform: rotate(0deg);
	}

	.blog-link:hover .text {
		padding-right: 2rem;
	}

	.blog {
		margin: 1rem 0;
	}

	@media screen and (min-width: 968px) {
		.blog {
			margin: 2rem 0;
		}

		.blog-link {
			font-size: 2rem;
		}
	}
</style>
