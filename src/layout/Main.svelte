<main>
	<slot />
</main>

<style>
	main {
		max-width: 100vw;
		min-width: 320px;
		width: auto;
		padding: 2rem 2rem 1rem;
		font-size: 4rem;
		font-family: 'Mattone', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		color: var(--foreground);
		display: grid;
		max-width: 1600px;
		margin: 0 auto;
	}

	@media screen and (max-width: 1240px) {
		main {
			flex-direction: column;
			font-size: 3rem;

			align-items: center;
		}
	}

	@media screen and (max-width: 450px) {
		main {
			padding: 1rem 1rem 0;
			font-size: 1.5rem;
		}
	}
</style>
