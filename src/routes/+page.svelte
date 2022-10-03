<script lang="ts">
	import type { Post, PostSummary } from '$lib/types';
	import BigBlockLink from '$lib/components/BigBlockLink.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';

	export let data: { posts: Array<PostSummary> };

	$: console.log(data);

	$: recentPost = data.posts[0];
</script>

<section>
	<Wrapper>
		<div class="hero">
			<h2>I'm a creative web developer who likes building fun things.</h2>
		</div>

		<BigBlockLink
			href="https://castrooms.com"
			title="Castrooms"
			subtitle="Where I work"
			--color="#e1e600"
			--grid-col-start="4"
			--grid-col-end="6"
		>
			Next generation streaming for DJs and Ravers
		</BigBlockLink>
	</Wrapper>

	<Wrapper>
		<BigBlockLink
			href={recentPost.path}
			title={recentPost.meta.title}
			subtitle="Something I've written"
			--color="#dd00ee"
			--grid-col-start="1"
			--grid-col-end="5"
		>
			{recentPost.meta.subtitle}
		</BigBlockLink>
	</Wrapper>
</section>

<style>
	section {
		margin-top: 2rem;
	}
	.hero {
		font-size: 1.75rem;
		font-weight: bold;
		padding-top: 1.5rem;
		font-family: var(--header-font-family);
		grid-column-start: 1;
		grid-column-end: 6;

		border: 4px solid var(--highlight);
		padding: 1.5rem;
	}

	h2 {
		margin-bottom: 2rem;
	}

	@media screen and (min-width: 968px) {
		.hero {
			grid-column-start: 1;
			grid-column-end: 4;
		}
	}
</style>
