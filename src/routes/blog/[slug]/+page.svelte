<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import type { Post } from '$lib/types';
	export let data: Post;

	const inverse = data.inverse ? 'inverse' : '';
</script>

<Head heading={data.title} color={data.titleColor} />

<article style={`--color: ${data.titleColor}`}>
	<header class:inverse>
		<h1>{data.title}</h1>
	</header>

	<section class="post">
		<svelte:component this={data.content} />
		<p class="published-on">
			Published on {new Date(data.date).toLocaleDateString('en-GB', {
				dateStyle: 'full'
			})}
		</p>
	</section>
</article>

<style>
	header {
		display: flex;
		font-family: var(--header-font-family);
		width: 100%;
		background-color: var(--color);
		color: var(--white);
	}

	header.inverse {
		color: var(--near-black);
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

	:global(.post p) {
		font-size: 1.5rem;
		line-height: 1.5;
		margin: 0 0 1.75rem 0;
	}
	:global(.post a) {
		color: var(--near-black);
		text-decoration-color: var(--color);
	}

	:global(.post a:hover) {
		color: var(--color);
		text-decoration-color: var(--color);
	}

	:global(.post blockquote) {
		border-left: 3px solid var(--color);
		padding-left: 1rem;
		margin-left: 0;
		font-style: italic;
	}

	:global(.post iframe) {
		margin-bottom: 2rem;
		width: 100%;
		aspect-ratio: 16/9;
	}

	:global(.post h2) {
		margin: 0 0 1rem 0;
	}

	.published-on {
		color: var(--grey);
		font-size: 1.2rem;
	}

	:global(p:has(img)) {
		margin: 0;
		width: 100vw;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		/* overflow-x: scroll; */
	}

	:global(p:has(img) > img) {
		width: auto;
		max-height: 40rem;
		object-fit: cover;
	}

	@media (min-width: 968px) {
		h1 {
			font-size: 5rem;
			padding: 2rem;
		}

		:global(.post h2) {
			font-size: 3rem;
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
