<div class="wrapper">
	<slot />
</div>

<style>
	.wrapper {
		max-width: 1400px;
		width: 100%;
		padding: 0 2rem;
		margin: 0 auto;
	}

	@media screen and (min-width: 968px) {
		.wrapper {
			padding: 0 2rem;
		}
	}
</style>
