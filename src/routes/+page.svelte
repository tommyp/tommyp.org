<script lang="ts">
	import type { PostSummary } from '$lib/types';
	import BigBlockLink from '$lib/components/BigBlockLink.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import Head from '$lib/components/Head.svelte';
	import BigBlock from '$lib/components/BigBlock.svelte';
	import Marquee from 'svelte-marquee';

	export let data: { posts: Array<PostSummary> };

	$: recentPosts = data.posts.slice(0, 3);
</script>

<Head />
<section>
	<Wrapper>
		<div class="hero">
			<h2>
				I'm a creative web developer who builds fun things like <a
					class="lineup"
					href="https://lineup.fun">Lineup.fun</a
				>
				and <a class="shorts" href="https://www.isitshortsweathertoday.com">Shorts Weather</a> and I
				work at <a class="castrooms" href="https://castrooms.com/">CastRooms</a>.
			</h2>
		</div>
	</Wrapper>
	<div class="marquee">
		<Marquee content="blog" />
	</div>

	<Wrapper>
		<div class="blog">
			<Grid>
				{#each recentPosts as recentPost}
					<BigBlockLink
						href={recentPost.path}
						title={recentPost.meta.title}
						subtitle={recentPost.meta.subtitle}
						inverse={recentPost.meta.inverse}
						--color={recentPost.meta.titleBgColor}
						--foreground={recentPost.meta.titleColor}
						--grid-col-start="1"
						--grid-col-end="13"
					/>
				{/each}

				<BigBlockLink
					href="/blog"
					title="More →"
					--grid-col-start="5"
					--grid-col-end="9"
					--color="#000"
					--foreground="#fff"
				/>

				<!-- --color={recentPost.meta.titleBgColor}
			--foreground={recentPost.meta.titleColor} -->

				<!-- <BigBlockLink
				href="https://castrooms.com"
				title="Castrooms"
				subtitle="Where I work"
				--color="#e1e600"
				--foreground="#000"
				--grid-col-start="8"
				--grid-col-end="13"
			>
				Next generation streaming for DJs and Ravers
			</BigBlockLink>
			<BigBlockLink
				href="https://lineup.fun"
				title="Lineup.fun"
				subtitle="I made this"
				--color="#95fc0f"
				--foreground="#000"
				--grid-col-start="1"
				--grid-col-end="6"
			>
				A spotify playlist generator
			</BigBlockLink>
			<BigBlockLink
				href="https://www.isitshortsweathertoday.com/"
				title="Shorts Weather"
				subtitle="I made this too"
				--color="#f56c42"
				--grid-col-start="6"
				--grid-col-end="9"
			>
				World's best weather site
			</BigBlockLink> -->
			</Grid>
		</div>
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
		display: flex;
		flex-direction: column;
	}
	.marquee {
		max-width: 100vw;
	}
	.hero {
		font-size: 1.5rem;
		font-weight: bold;

		font-family: var(--header-font-family);
		grid-column-start: 1;
		grid-column-end: 13;

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

	.lineup {
		--color: #95fc0f;
	}

	.shorts {
		--color: #f56c42;
	}

	.castrooms {
		--color: #e1e600;
	}

	.hero a {
		color: var(--color);
	}

	/* shake animation */

	@media screen and (min-width: 968px) {
		.hero {
			font-size: 3rem;
			padding-top: 1.5rem;
			line-height: 1.2;
		}

		.marquee {
			font-size: 4rem;
			color: var(--background);
			text-transform: uppercase;
			word-spacing: 2.5rem;
			font-weight: bold;
			border-top: 0.5rem solid var(--background);
			border-bottom: 0.5rem solid var(--background);
			margin: 4rem 0 2rem;
		}

		.blog {
			margin-bottom: 2rem;
		}
	}
</style>
