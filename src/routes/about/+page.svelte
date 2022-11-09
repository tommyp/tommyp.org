<script>
	import Wrapper from '$lib/components/Wrapper.svelte';
</script>

<Wrapper>
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
</Wrapper>

<style>
	article {
		font-size: 4rem;
		color: var(--near-black);
		font-weight: bold;
		grid-column-start: 2;
		grid-column-end: 12;
		line-height: 1.1;
	}

	a {
		color: var(--near-black);
		text-decoration-color: var(--neon-green);
	}

	a:hover {
		color: var(--neon-green);
	}
</style>
