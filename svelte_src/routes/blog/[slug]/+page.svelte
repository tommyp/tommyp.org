<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import type { Post } from '$lib/types';
	export let data: Post;
	import '$lib/styles/code-theme.css';
	import MastHeader from '$lib/components/MastHeader.svelte';

	const inverse = data.inverse ? 'inverse' : '';
</script>

<Head
	heading={data.title}
	bgColor={data.titleBgColor}
	description={data.subtitle}
	textColor={data.titleColor}
/>

<article style={`--bgColor: ${data.titleBgColor}; --titleColor: ${data.titleColor || '#fff'}`}>
	<MastHeader title={data.title} subtitle={data.subtitle} />

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

	:global(.post h2, h3) {
		font-size: 2rem;
		font-weight: bold;
		margin: 1rem 0 0.75rem 0;
		line-height: 1;
	}

	.published-on {
		color: var(--grey);
		font-size: 1.2rem;
	}

	:global(.post p:has(img)) {
		margin: 0;
		width: 100vw;

		display: flex;
		flex-wrap: wrap;
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
		:global(.post h2) {
			font-size: 3rem;
			line-height: 1;
			margin-bottom: 3rem;
		}

		section {
			padding: 2rem;
			font-size: 1.75rem;
			line-height: 1.5;
			width: 100%;
			max-width: 60rem;
		}

		:global(.post p:has(img) > img) {
			/* width: 100%; */
			max-height: 30rem;
		}

		:global(.post ul) {
			padding-left: 1.5rem;
		}

		:global(.post h2) {
			margin: 3rem 0 1.5rem 0;
		}

		:global(.post code[class*='language-']) {
			font-size: 1rem;
			line-height: 1;
		}
	}
</style>
