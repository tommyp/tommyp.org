<div class="grid">
	<slot />
</div>

<style>
	.grid {
		max-width: 1600px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	@media screen and (min-width: 968px) {
		.grid {
			display: grid;
			column-gap: 2rem;

			grid-template-columns: repeat(12, 1fr);
		}
	}
</style>
