<script lang="ts">
	import BigBlockLink from '$lib/components/BigBlockLink.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import Head from '$lib/components/Head.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import type { Post, PostSummary } from '$lib/types';
	export let data: { posts: Array<PostSummary> };
</script>

<Head heading="Blog" />

<section>
	<Wrapper>
		<Grid>
			<h2><span class="text">Blog posts</span></h2>
			{#each data.posts as post}
				<BigBlockLink
					href={post.path}
					title={post.meta.title}
					subtitle={post.meta.subtitle}
					date={post.meta.date}
					--color={post.meta.titleBgColor}
					--foreground={post.meta.titleColor}
					--grid-col-start="1"
					--grid-col-end="13"
				/>
			{/each}
		</Grid>
	</Wrapper>
</section>

<style>
	section {
		padding: 2rem 0;
	}

	h2 {
		grid-column-start: 4;
		grid-column-end: 10;
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
		text-align: center;
		background-color: #fff;
	}

	@media screen and (min-width: 968px) {
		h2 {
			font-size: 3rem;
			padding: 0.5rem 4rem;
		}
	}
</style>
