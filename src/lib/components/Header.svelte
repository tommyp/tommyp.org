<header>
	<h1>
		<a href="/">Tommy Palmer</a>
	</h1>

	<nav>
		<ul>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		text-align: center;
		font-size: 1.5rem;
	}

	h1 {
		border-bottom: 4px solid var(--border-color);
		margin: 0;
	}

	h1 > a {
		text-decoration: none;
		color: inherit;
		display: block;
		padding: 2rem 0;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		display: flex;

		width: 100vw;
		justify-content: space-between;
	}

	li {
		list-style: none;
		padding: 0;
		display: block;
		width: 100%;
	}

	li > a {
		text-decoration: none;
		color: inherit;
		display: block;
		padding: 1rem 0;
		border-bottom: 4px solid var(--border-color);
		border-right: 4px solid var(--border-color);
		font-family: 'Karrik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	li:last-child > a {
		border-right: none;
	}

	a:hover {
		color: var(--background);
		background: var(--foreground);
	}
</style>
