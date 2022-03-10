<header>
	<nav>
		<ul class="logo">
			<li>
				<a href="/"> Tommy Palmer </a>
			</li>
		</ul>
		<ul class="page-nav">
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
		align-items: center;
		font-family: 'Mattone', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 2rem;
		padding: 1rem 2rem 0;
		max-width: 1600px;
		margin: 0 auto;
	}

	nav {
		width: 100%;
		display: flex;
		gap: 3rem;
		justify-content: space-between;
	}

	ul {
		display: flex;
		margin: 0;
		padding: 0;
		align-items: center;
		gap: 3rem;
	}

	ul.logo {
	}

	ul.page-nav {
	}

	li {
		padding: none;
		list-style: none;
		display: flex;
		align-items: center;
	}

	a {
		padding: 1.5rem;
		text-decoration: none;
		text-shadow: none;
		text-transform: uppercase;
		color: var(--highlight);
		border: 3px solid var(--highlight);
	}

	a:hover {
		color: var(--foreground);
		background: var(--green);
		border: 3px solid var(--green);
	}

	@media screen and (max-width: 1240px) {
		header {
			font-size: 1.5rem;
		}
	}

	@media screen and (max-width: 600px) {
		header {
			font-size: 0.75rem;
			padding: 0 1rem;
		}

		a {
			padding: 0.3rem;
			border-bottom-width: 3px;
		}
	}
</style>
