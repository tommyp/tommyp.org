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
		border-bottom: var(--border-width) solid var(--border-color);
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
		text-decoration-color: var(--color);
	}

	a:hover {
		color: var(--near-black);
		border-radius: 5px;
	}

	p {
		margin: 1.5rem 0;
	}

	@media screen and (min-width: 968px) {
		section {
			padding: 0 1rem;
			line-height: 1.2;
			font-size: 3.5rem;
		}

		.tagline {
			/* margin-top: 1.75rem; */
		}
	}
</style>
