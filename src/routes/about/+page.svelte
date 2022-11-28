<script>
	import Grid from '$lib/components/Grid.svelte';
	import Head from '$lib/components/Head.svelte';
</script>

<Head heading="About" />
<section>
	<Grid>
		<article>
			<p>
				I'm from Belfast and live in London. I haven't lost my accent. You can usually spot me by my
				red hair and beard.
			</p>
			<p>
				I'm a huge fan of electronic music and sometimes DJ as <a
					href="https://soundcloud.com/syntax-terrorist">Syntax Terror</a
				>. I like to spend my Summer at music festivals.
			</p>

			<p>
				I also like art, design, brutalism, mid-century modern architechure and furniture, colourful
				things, fancy <s
					><a href="https://www.urbandictionary.com/define.php?term=gutties">gutties</a></s
				> trainers, interesting indie videogames, and a lovely pint in a lovely pub.
			</p>
		</article>
	</Grid>
</section>

<style>
	section {
		padding: 1rem;
	}
	article {
		color: var(--near-black);
		grid-column-start: 1;
		grid-column-end: 8;
	}

	p {
		font-size: 1.5rem;
		line-height: 1.5;
		margin: 0 0 1.75rem 0;
	}

	a {
		color: var(--near-black);
		text-decoration-color: var(--neon-green);
	}

	a:hover {
		color: var(--neon-green);
	}

	@media (min-width: 968px) {
		section {
			padding: 2rem;
		}
	}
</style>
