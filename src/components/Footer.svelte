<footer>
	<nav>
		<ul>
			<li>
				<a href="/home"> Home </a>
			</li>
			<li>
				<a href="/work"> Work </a>
			</li>
			<li>
				<a href="/blog"> Blog </a>
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
		min-height: 2rem;
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		font-family: 'Mattone', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background-color: var(--green);
	}

	nav {
		width: 100%;
		height: 100%;
	}

	ul {
		display: flex;
		padding: 0 4rem;
		margin: 0;
		width: 100vw;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		height: 100%;
	}

	li {
		list-style: none;
		font-size: 3rem;
		display: flex;
		align-items: center;
		height: 100%;
	}

	li > a {
		text-decoration: none;
		text-shadow: none;
		text-transform: uppercase;
		color: var(--background);
	}
</style>
