<!-- <section class="tagline">
	<h2>I make websites</h2>
</section> -->

<section class="sub">
	<p>
		I'm a product focussed and creative web developer. I write JavaScript and Elixir, and work at
		<a class="castrooms" href="https://castrooms.com/">CastRooms</a>.
	</p>
</section>

<style>
	section {
		font-weight: bold;
		font-family: var(--header-font-family);
		grid-column-start: 1;
		grid-column-end: 13;
		color: var(--near-black);
		padding: 0.25rem 1rem;
		border-bottom: calc(var(--border-width) * 3) solid var(--border-color);
		/* text-shadow: 0 0 0.05rem var(--background); */
	}

	h2 {
		font-weight: bold;
		text-transform: uppercase;
		margin: 0;
	}

	.castrooms {
		--color: #e1e600;
	}

	a {
		color: var(--near-black);
		text-decoration: none;
		border: 2px solid var(--color);
		padding: 0 0.5rem;
		border-radius: 2rem;
	}

	a:hover {
		color: #fff;
		border-radius: 0;
		background: var(--color);
	}

	@media screen and (min-width: 968px) {
		section {
			padding: 0 4rem;
			line-height: 1.5;
			font-size: 3.5rem;
		}

		.tagline {
			/* margin-top: 1.75rem; */
		}
	}
</style>
