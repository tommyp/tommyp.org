<script>
	import Grid from '$lib/components/Grid.svelte';
	import Head from '$lib/components/Head.svelte';
</script>

<Head heading={'Work'} />

<section>
	<Grid>
		<article>
			<p>
				I've worked in tech at big and small companies for over ten years. At the moment I'm working
				on <a href="https://castrooms.com">Castrooms</a>, a new DJ streaming platform.
			</p>
			<p>
				I've built some things just for me that other people use, like <a
					href="https://www.lineup.fun/">Lineup.fun</a
				>
				and <a href="https://www.isitshortsweathertoday.com/">Is it Shorts Weather today</a>.
			</p>
			<p>
				I've previously worked for <a href="https://deliveroo.co.uk">Deliveroo</a> and the
				<a href="https://www.gov.uk/government/organisations/government-digital-service"
					>Government Digital Service</a
				>.
			</p>
			<p>I like building fun things for users that solve interesting problems.</p>
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
