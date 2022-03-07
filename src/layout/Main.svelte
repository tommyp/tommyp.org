<main>
	<slot />
</main>

<style>
	main {
		max-width: 100vw;
		min-width: 320px;
		width: auto;
		min-height: 100vh;
		padding: 2rem 4rem;
		font-size: 4rem;
		font-family: 'Mattone', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		color: var(--foreground);
		display: flex;
	}

	@media screen and (max-width: 900px) {
		main {
			flex-direction: column;
			font-size: 3rem;
			padding: 1rem 1rem 4rem 1rem;
			align-items: center;
		}
	}

	@media screen and (max-width: 450px) {
		main {
			font-size: 2rem;
		}

		a {
			border-width: 2px;
		}
	}
</style>
