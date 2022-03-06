<footer>
	<nav>
		<ul>
			<li>
				<a href="/"> Tommy Palmer </a>
			</li>
		</ul>
		<ul>
			<li>
				<a href="/work"> Work </a>
			</li>
			<li>
				<a href="/about"> About </a>
			</li>
		</ul>
	</nav>
</footer>

<style>
	footer {
		height: 10vh;
		width: 100vw;
		min-height: 2rem;
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		font-family: 'Mattone', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background-color: var(--highlight);
		font-size: 2rem;
	}

	nav {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
	}

	ul {
		display: flex;
		padding: 0 4rem;
		margin: 0;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		height: 100%;
	}

	li {
		list-style: none;
		display: flex;
		align-items: center;
		height: 100%;
	}

	a {
		padding: 2rem 1rem;
		text-decoration: none;
		text-shadow: none;
		text-transform: uppercase;
		color: var(--background);
	}

	a:hover {
		color: var(--foreground);
		background: var(--background);
	}

	@media screen and (max-width: 600px) {
		footer {
			height: 8vh;
			font-size: 1rem;
		}

		ul {
			padding: 0 1rem;
		}

		a {
			padding: 0.3rem;
		}
	}
</style>
