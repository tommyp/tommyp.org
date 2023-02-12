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
			{#each data.posts as post}
				<BigBlockLink
					href={post.path}
					title={post.meta.title}
					subtitle={post.meta.subtitle}
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
</style>
