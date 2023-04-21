<h2 class="hero">
	I'm a product focussed and creative web developer writing JavaScript and Elixir at <a
		class="castrooms"
		href="https://castrooms.com/">CastRooms</a
	>.
</h2>

<style>
	.hero {
		font-weight: bold;
		font-family: var(--header-font-family);
		grid-column-start: 1;
		grid-column-end: 13;
		color: var(--near-black);
		padding: 0.25rem 0;
		font-size: 3.5rem;
		margin: 0;
		font-weight: bold;
		/* text-shadow: 0 0 0.05rem var(--background); */
	}

	.castrooms {
		--color: #e1e600;
	}

	.hero a {
		color: var(--near-black);
		text-decoration-color: var(--color);
	}

	.hero a:hover {
		background-color: var(--color);
		color: var(--near-black);
		border-radius: 5px;
	}

	@media screen and (min-width: 968px) {
		.hero {
			padding-top: 1.5rem;
			line-height: 1.2;
		}

		h2 {
			font-size: 4.5rem;
		}
	}
</style>
