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

	$: recentPosts = data.posts.slice(0, 3);
</script>

<Head />
<section>
	<Hero />
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

	.blog {
		padding-bottom: 1rem;
	}

	/* shake animation */

	@media screen and (min-width: 968px) {
		.blog {
			margin-top: 5rem;
			margin-bottom: 2rem;
		}
	}
</style>
