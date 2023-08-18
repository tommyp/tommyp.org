<script>
	import Grid from '$lib/components/Grid.svelte';
	import Head from '$lib/components/Head.svelte';
	import MastHeader from '$lib/components/MastHeader.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import H1 from '$lib/components/html/H1.svelte';
</script>

<Head heading="About" />

<MastHeader title="About The Author" --titleColor="#fff" --bgColor="var(--highlight)" />
<Wrapper>
	<section>
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

			<p>
				I've worked in tech at big and small companies for over ten years. At the moment I'm working
				on <a href="https://castrooms.com">Castrooms</a> - a new DJ streaming platform. I've
				previously worked for <a href="https://deliveroo.co.uk">Deliveroo</a> and the
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
	</section>
</Wrapper>

<style>
	section {
		padding-top: 1rem;
		color: var(--near-black);
	}
	.img {
		grid-column-start: 8;
		grid-column-end: 13;
		color: var(--near-black);
		font-style: italic;
	}

	img {
		width: 100%;
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
			font-size: 1.75rem;
			line-height: 1.5;
			width: 100%;
			max-width: 60rem;
		}

		article {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
		}
	}
</style>
