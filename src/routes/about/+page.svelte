<script>
	import Grid from '$lib/components/Grid.svelte';
	import Head from '$lib/components/Head.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
</script>

<Head heading="About" />
<section>
	<Wrapper>
		<Grid>
			<article>
				<p>
					I'm from Belfast and live in London. I haven't lost my accent. You can usually spot me by
					my red hair and beard.
				</p>
				<p>
					I'm a huge fan of electronic music and sometimes DJ as <a
						href="https://soundcloud.com/syntax-terrorist">Syntax Terror</a
					>. I like to spend my Summer at music festivals.
				</p>

				<p>
					I also like art, design, brutalism, mid-century modern architechure and furniture,
					colourful things, fancy <s
						><a href="https://www.urbandictionary.com/define.php?term=gutties">gutties</a></s
					> trainers, interesting indie videogames, and a lovely pint in a lovely pub.
				</p>

				<p>
					I've worked in tech at big and small companies for over ten years. At the moment I'm
					working on <a href="https://castrooms.com">Castrooms</a>, a new DJ streaming platform.
					I've previously worked for <a href="https://deliveroo.co.uk">Deliveroo</a> and the
					<a href="https://www.gov.uk/government/organisations/government-digital-service"
						>Government Digital Service</a
					>.
				</p>
				<p>
					I've built some things just for me that other people use, like <a
						href="https://www.lineup.fun/">Lineup.fun</a
					>
					and <a href="https://www.isitshortsweathertoday.com/">Is it Shorts Weather today</a>.
				</p>

				<p>I like building fun things for users that solve interesting problems.</p>
			</article>
			<img src="/images/about/green.jpeg" alt="Me, doing my best Wired cover pose" />
		</Grid>
	</Wrapper>
</section>

<style>
	section {
		padding-top: 2rem;
	}
	article {
		color: var(--near-black);
		grid-column-start: 1;
		grid-column-end: 8;
	}

	img {
		grid-column-start: 8;
		grid-column-end: 13;
		width: 100%;
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
	}
</style>
