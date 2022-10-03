<div class="wrapper">
	<slot />
</div>

<style>
	.wrapper {
		max-width: 1600px;
		margin: 0 auto;
		padding: 0 2rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 3rem;
	}

	@media screen and (max-width: 1240px) {
		.wrapper {
			padding: 1rem 1rem 0;
		}
	}
</style>
