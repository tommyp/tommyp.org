<script lang="ts">
	import type { Post } from '$lib/types';
	export let data: Post;
</script>

<article>
	<header style={`--headerColor: ${data.titleColor}`}>
		<h1>{data.title}</h1>
	</header>

	<p>Published: {data.date}</p>

	<svelte:component this={data.content} />
</article>

<style>
	header {
		display: flex;
		font-family: var(--header-font-family);
		width: 100%;
		background-color: var(--headerColor);
		color: var(--primary);
	}

	h1 {
		font-weight: bold;
		font-size: 2rem;
		padding: 1rem;
	}
</style>
