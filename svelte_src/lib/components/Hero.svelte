<script lang="ts">
	import Wrapper from './Wrapper.svelte';
</script>

<section>
	<Wrapper>
		<p>
			I'm Tommy. I'm a product focussed and creative web developer. Working on things like
			<a href="https://castrooms.com" style:--background="#e1e600" style:--color="#e500e1"
				>CastRooms</a
			>,
			<a href="https://lineup.fun" style:--background="#95fc0f" style:--color="#fc660f">Lineup</a>,
			and
			<a
				href="https://isitshortsweathertoday.com"
				style:--background="#cd3f1c"
				style:--color="#fc3402">Shorts</a
			>.
		</p>
	</Wrapper>
</section>

<style>
	section {
		font-family: var(--header-font-family);
		grid-column-start: 1;
		grid-column-end: 13;
		color: var(--near-black);
		padding: 2rem 0;
		border-bottom: calc(var(--border-width) * 3) solid var(--border-color);
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		font-size: 2rem;
	}

	p {
		font-weight: bold;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	a {
		color: var(--near-black);
		text-decoration-color: var(--background);
		transition: all 0.25s ease-in-out;
	}

	a:hover {
		border-radius: 0;
		color: var(--color);
	}

	@media screen and (min-width: 968px) {
		section {
			padding: 0 0 2rem;
			line-height: 1.1;
			font-size: 4rem;
		}

		p {
			margin: 1.5rem 0;
			/* max-width: 60vw; */
		}
	}
</style>
