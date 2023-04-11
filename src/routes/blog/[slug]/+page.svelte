<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import type { Post } from '$lib/types';
	export let data: Post;

	const inverse = data.inverse ? 'inverse' : '';
</script>

<Head heading={data.title} bgColor={data.titleBgColor} />

<article style={`--bgColor: ${data.titleBgColor}; --titleColor: ${data.titleColor || '#fff'}`}>
	<header class:inverse>
		<Wrapper>
			<h1>{data.title}</h1>
			<h2>{data.subtitle}</h2>
		</Wrapper>
	</header>

	<Wrapper>
		<section class="post">
			<svelte:component this={data.content} />
			<p class="published-on">
				Published on {new Date(data.date).toLocaleDateString('en-GB', {
					dateStyle: 'full'
				})}
			</p>
		</section>
	</Wrapper>
</article>

<style>
	header {
		display: flex;
		font-family: var(--header-font-family);
		width: 100%;
		background-color: var(--bgColor);
		color: var(--titleColor);
		flex-direction: column;
		padding: 1rem 0;
	}

	header.inverse {
		color: var(--near-black);
	}

	h1 {
		font-weight: bold;
		font-size: 2rem;
	}

	h2 {
		font-size: 0.8rem;
		font-weight: bold;
		margin: 0;
		text-transform: uppercase;
	}

	section {
		color: var(--near-black);
		padding-top: 1rem;
		font-size: 1.5rem;
		line-height: 1.5;
	}

	:global(.post p) {
		margin: 0 0 1.75rem 0;
	}

	:global(.post ul) {
		padding-left: 1rem;
	}

	:global(.post a) {
		color: var(--near-black);
		text-decoration-color: var(--bgColor);
	}

	:global(.post a:hover) {
		color: var(--bgColor);
		text-decoration-color: var(--bgColor);
	}

	:global(.post blockquote) {
		border-left: 3px solid var(--bgColor);
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
		font-size: 2rem;
		font-weight: bold;
		margin: 2rem 0 0.75rem 0;
	}

	.published-on {
		color: var(--grey);
		font-size: 1.2rem;
	}

	:global(.post p:has(img)) {
		margin: 0;
		width: calc(80vw - 2rem);
		display: flex;
		/* flex-wrap: wrap; */
		gap: 1rem;

		overflow-y: scroll;
		scroll-snap-type: y mandatory;
	}

	:global(.post p:has(img) > img) {
		width: auto;
		max-height: 30rem;
		object-fit: cover;
		scroll-snap-align: start;
	}

	@media (min-width: 968px) {
		h1 {
			font-size: 5rem;
			padding: 1rem 2rem 0rem;
		}

		h2 {
			padding: 0 2rem 1.5rem;
		}

		:global(.post h2) {
			font-size: 3rem;
		}

		section {
			padding: 2rem;
			font-size: 1.75rem;
			line-height: 1.5;
			width: 100%;
			max-width: 60rem;
		}

		:global(.post p:has(img) > img) {
			width: auto;
			max-height: 30rem;
			object-fit: cover;
			scroll-snap-align: start;
		}

		:global(.post ul) {
			padding-left: 1.5rem;
		}
	}
</style>
