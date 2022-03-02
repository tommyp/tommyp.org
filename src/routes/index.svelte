<main>
	<section class="img-container">
		<img src="/images/wall.jpg" alt="" srcset="" />
	</section>
	<section class="text-container">
		<h1>I'm Tommy Palmer</h1>
		<h2>A freelance web developer in London</h2>
		<p><a class="chat" href="mailto:hi@tommyp.org">let's chat </a></p>
	</section>
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
</main>

<style>
	@font-face {
		font-family: 'Basteleur', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		src: url('./fonts/basteleur/Basteleur-Bold.woff') format('woff'),
			url('./fonts/basteleur/Basteleur-Bold.woff2') format('woff2');
		font-style: bold;
		font-weight: 700;
	}

	:global(body) {
		--background: #05999e;
		--foreground: #ffc800;
		--highlight: #b43eaa;
		--green: #00ff00;
	}

	main {
		align-items: center;
		display: flex;
		font-family: 'Basteleur';
		font-weight: bold;
		height: 90vh;
		justify-content: center;
		padding: 1rem 2rem;
		width: 100%;
		background-color: var(--background);
		color: var(--foreground);
	}

	footer {
		height: 10vh;
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		background-color: var(--green);
	}

	h1,
	h2,
	p,
	a {
		text-shadow: 3px 0px var(--highlight);
	}

	h1 {
		margin: 0;
		font-size: 6rem;
	}

	h2,
	p {
		margin: 2rem 0 0 0;
		font-size: 3.5rem;
	}

	.chat {
		color: var(--foreground);
		text-decoration-style: wavy;
		text-decoration-color: var(--foreground);
		transition: all 0.25s;
	}

	.chat:hover {
		color: var(--highlight);
		text-decoration-color: var(--highlight);
		text-shadow: 3px 0px var(--foreground);
	}

	nav {
		width: 100%;
		height: 100%;
	}

	ul {
		display: flex;
		padding: 0;
		margin: 0;
		width: 100vw;
		justify-content: space-around;
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

	section.img-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 50%;
		padding-top: 1rem;
	}

	section.img-container img {
		object-fit: contain;
		width: 80%;
	}

	section.text-container {
		width: 50%;
	}
</style>
