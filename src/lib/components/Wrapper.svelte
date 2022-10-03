<div class="wrapper">
	<slot />
</div>

<style>
	.wrapper {
		max-width: 1600px;
		margin: 3rem auto;
		padding: 0 2rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	@media screen and (min-width: 968px) {
		.wrapper {
			padding: 1rem 1rem 0;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-columns: repeat(5, 1fr);
		}
	}
</style>
