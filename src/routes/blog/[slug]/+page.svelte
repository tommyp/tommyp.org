<script lang="ts">
	import type { Post } from '$lib/types';
	export let data: Post;

	$: console.log(data.content);
</script>

<article style={`--color: ${data.titleColor}`}>
	<header>
		<h1>{data.title}</h1>
	</header>

	<section class="post">
		<svelte:component this={data.content} />
		<p>Published: {new Date(data.date).toLocaleDateString()}</p>
	</section>
</article>

<style>
	header {
		display: flex;
		font-family: var(--header-font-family);
		width: 100%;
		background-color: var(--color);
		color: var(--primary);
	}

	h1 {
		font-weight: bold;
		font-size: 2rem;
		padding: 1rem;
	}

	section {
		padding: 1rem;
		color: var(--near-black);
	}

	:global(.post a) {
		color: var(--near-black);
		text-decoration-color: var(--color);
	}

	:global(.post a:hover) {
		color: var(--color);
		text-decoration-color: var(--color);
	}

	@media (min-width: 968px) {
		h1 {
			font-size: 5rem;
			padding: 2rem;
		}

		section {
			padding: 2rem;
			font-size: 1.5rem;
			line-height: 1.5;

			width: 100%;
			max-width: 50rem;
		}
	}
</style>
