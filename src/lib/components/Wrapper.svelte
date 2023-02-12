<div class="wrapper">
	<slot />
</div>

<style>
	.wrapper {
		max-width: 1600px;
		padding: 0 2rem;
	}

	@media screen and (min-width: 968px) {
		.wrapper {
			padding: 0 2rem;
		}
	}
</style>
