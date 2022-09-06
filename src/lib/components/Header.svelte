<header>
	<a class="logo" href="/"><h1>Tommy Palmer</h1></a>

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

	.logo {
		border-bottom: 4px solid var(--border-color);
		margin: 0;
		font-size: 1.25rem;
		text-decoration: none;
		color: inherit;
		display: block;
		text-transform: uppercase;
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
		font-family: 'Mattone', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		text-transform: uppercase;
	}

	li:last-child > a {
		border-right: none;
	}

	a:hover {
		color: var(--background);
		background: var(--foreground);
	}

	@media (min-width: 768px) {
		header {
			text-align: left;
			display: flex;
			border-bottom: 4px solid var(--border-color);
		}

		.logo {
			flex-grow: 2;
			border-bottom: none;
			padding-left: 2rem;
		}

		ul {
			width: 50vw;
			display: flex;
			height: 100%;
		}

		li {
			display: block;
		}

		li a {
			padding: 0;
			display: flex;
			height: 100%;
			align-items: center;
			justify-content: center;
		}

		li:first-child > a {
			border-left: 4px solid var(--border-color);
		}
	}
</style>
