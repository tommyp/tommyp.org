<header>
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
</header>

<style>
	header {
		height: 10vh;
		width: 100vw;
		min-height: 2rem;
		position: fixed;
		top: 0;
		display: flex;
		align-items: center;
		font-family: 'Mattone', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

		font-size: 2rem;
		padding: 0 2rem;
	}

	nav {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
	}

	ul {
		display: flex;

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
		padding: 0.5rem;
		text-decoration: none;
		text-shadow: none;
		text-transform: uppercase;
		color: var(--foreground);
		border-bottom: 5px solid var(--green);
	}

	a:hover {
		color: var(--foreground);
		background: var(--green);
		border-bottom: 5px solid var(--green);
	}

	@media screen and (max-width: 1240px) {
		header {
			height: 8vh;
			font-size: 1.5rem;
		}

		ul {
			padding: 0 1.5rem;
		}
	}

	@media screen and (max-width: 600px) {
		header {
			font-size: 0.75rem;
		}

		ul {
			padding: 0 1rem;
		}

		a {
			padding: 0.3rem;
			border-bottom-width: 3px;
		}
	}
</style>
