<script>
	import Main from '../layout/Main.svelte';
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ delay: 250, duration: 250, x: -100 }} out:fly={{ delay: 0, duration: 250, x: -100 }}>
	<Main>
		<article>
			<p>I'm originally from Belfast, but I've lived in London since 2013.</p>
			<p>
				My first gig was Daft Punk. I have a <a href="https://www.thedesignersrepublic.com/">TDR</a>
				<a href="https://www.instagram.com/p/BRLqKPiA3UwTwP9Gi4KvBLMrBq8Kwkb7SHBU7g0/">tattoo</a>.
				I've seen <a href="https://www.youtube.com/watch?v=tfMTHIwTUXA">The Room</a> about 100 times.
			</p>
			<p>🎶 🎮 🍺 📺 🎥</p>
			<p>
				<a class="btn" href="mailto:hi@tommyp.org">email</a> /
				<a href="/files/tommy-palmer-cv.pdf">CV</a> /
				<a href="http://twitter.com/tommypalm">Twitter</a> /
				<a href="https://github.com/tommyp/">Github</a> /
			</p>
		</article>
	</Main>
</div>

<style>
	p {
		margin: 0;
		margin-bottom: 3rem;
	}

	a {
		color: var(--highlight);
		text-decoration: none;
		transition: color 0.5s, background 0.5s;
	}

	a:hover {
		color: var(--background);
		background: var(--highlight);
	}
</style>
