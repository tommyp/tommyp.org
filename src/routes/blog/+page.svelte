<script lang="ts">
	import BigBlockLink from '$lib/components/BigBlockLink.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import type { Post, PostSummary } from '$lib/types';
	export let data: { posts: Array<PostSummary> };
</script>

{#each data.posts as post}
	<Wrapper>
		<BigBlockLink
			href={post.path}
			title={post.meta.title}
			subtitle="Something I've written"
			--color={post.meta.titleColor}
			--grid-col-start="1"
			--grid-col-end="6"
		>
			{post.meta.subtitle}
		</BigBlockLink>
	</Wrapper>
{/each}
