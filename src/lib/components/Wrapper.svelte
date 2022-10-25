<div class="wrapper">
	<slot />
</div>

<style>
	.wrapper {
		max-width: 1600px;
		margin: 2rem auto;
		padding: 0 2rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	@media screen and (min-width: 968px) {
		.wrapper {
			padding: 0 2rem;
			display: grid;
			column-gap: 2rem;

			grid-template-columns: repeat(5, 1fr);
		}
	}
</style>
