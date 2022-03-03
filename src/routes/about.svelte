<script>
	import Footer from '../components/Footer.svelte';
</script>

<div>
	<main>
		<p>I'm originally from Belfast, but I've lived in London since 2013.</p>
		<p>
			My first gig was Daft Punk. I have a <a href="https://www.thedesignersrepublic.com/">TDR</a>
			<a href="https://www.instagram.com/p/BRLqKPiA3UwTwP9Gi4KvBLMrBq8Kwkb7SHBU7g0/">tattoo</a>.
			I've seen <a href="https://www.youtube.com/watch?v=tfMTHIwTUXA">The Room</a> about 100 times.
		</p>
		<p>I love 🎶, 🎮 & 🍺</p>
		<p>
			You can find me on
			<a href="http://twitter.com/tommypalm">Twitter</a>,
			<a href="https://github.com/tommyp/">Github</a>
		</p>
	</main>

	<Footer />
</div>

<style>
	main {
		width: 100vw;
		height: 100vh;
		padding: 2rem 4rem;
		font-size: 4rem;
		font-family: 'Mattone', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background: var(--background);
		color: var(--foreground);
	}

	p {
		margin: 0;
		margin-bottom: 3rem;
	}

	a {
		color: var(--foreground);
		border-bottom: 5px solid var(--foreground);
		text-decoration: none;
		transition: color 0.5s, background 0.5s;
	}

	a:hover {
		color: var(--background);
		background: var(--foreground);
		border-color: var(--foreground);
	}
</style>
