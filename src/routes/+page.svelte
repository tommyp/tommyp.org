<script lang="ts">
	import type { Post, PostSummary } from '$lib/types';
	import BigBlockLink from '$lib/components/BigBlockLink.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Test from '$lib/components/graphics/Test.svelte';

	export let data: { posts: Array<PostSummary> };

	$: recentPost = data.posts[0];
</script>

<section>
	<Wrapper>
		<div class="hero">
			<h2>I'm a creative web developer who likes building fun things <span>👋</span></h2>
		</div>
	</Wrapper>

	<Wrapper>
		<BigBlockLink
			href={recentPost.path}
			title={recentPost.meta.title}
			subtitle="Something I've written"
			--color={recentPost.meta.titleColor}
			--grid-col-start="1"
			--grid-col-end="4"
		>
			{recentPost.meta.subtitle}
		</BigBlockLink>
		<BigBlockLink
			href="https://castrooms.com"
			title="Castrooms"
			subtitle="Where I work"
			--color="#e1e600"
			--foreground="#000"
			--grid-col-start="4"
			--grid-col-end="6"
		>
			Next generation streaming for DJs and Ravers
		</BigBlockLink>
	</Wrapper>
</section>

<style>
	/* shake animation */
	@keyframes wave-hand {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(10deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	section {
		margin-top: 0rem;
	}
	.hero {
		font-size: 1.5rem;
		font-weight: bold;

		font-family: var(--header-font-family);
		grid-column-start: 1;
		grid-column-end: 6;

		color: var(--background);
	}

	h2 {
		margin: 0;
		font-weight: bold;
		text-shadow: 0 0 0.05rem var(--background);
	}
	span {
		display: inline-block;
	}

	span:hover {
		/* shake animation */
		transition: all;
		animation: wave-hand 0.5s infinite;
	}

	/* shake animation */

	@media screen and (min-width: 968px) {
		.hero {
			font-size: 3.5rem;
			padding-top: 1.5rem;
		}
	}
</style>
