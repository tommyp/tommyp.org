<script lang="ts">
	import BigBlockLink from '$lib/components/BigBlockLink.svelte';
	import Title from '$lib/components/Title.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import type { Post, PostSummary } from '$lib/types';
	export let data: { posts: Array<PostSummary> };
</script>

<Title prefix="Blog" />

{#each data.posts as post}
	<Wrapper>
		<BigBlockLink
			href={post.path}
			title={post.meta.title}
			subtitle="Something I've written"
			--color={post.meta.titleColor}
			--grid-col-start="2"
			--grid-col-end="11"
		>
			{post.meta.subtitle}
		</BigBlockLink>
	</Wrapper>
{/each}
