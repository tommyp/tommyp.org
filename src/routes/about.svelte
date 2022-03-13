<script>
	import Main from '$lib/layout/Main.svelte';
	import { fly } from 'svelte/transition';
	import Paragraph from '$lib/components/Paragraph.svelte';
</script>

<div in:fly={{ delay: 250, duration: 250, x: -100 }} out:fly={{ delay: 0, duration: 250, x: -100 }}>
	<Main>
		<article>
			<Paragraph>I'm originally from Belfast, but I've lived in London since 2013.</Paragraph>
			<Paragraph>
				My first gig was Daft Punk. I have a <a href="https://www.thedesignersrepublic.com/">TDR</a>
				<a href="https://www.instagram.com/p/BRLqKPiA3UwTwP9Gi4KvBLMrBq8Kwkb7SHBU7g0/">tattoo</a>.
				I've seen <a href="https://www.youtube.com/watch?v=tfMTHIwTUXA">The Room</a> about 100 times.
			</Paragraph>
			<Paragraph>🎶 🎮 🍺 📺 🎥</Paragraph>
			<Paragraph>
				<a class="btn" href="mailto:hi@tommyp.org">email</a> /
				<a href="/files/tommy-palmer-cv.pdf">CV</a> /
				<a href="http://twitter.com/tommypalmr">Twitter</a> /
				<a href="https://github.com/tommyp/">Github</a>
			</Paragraph>
		</article>
	</Main>
</div>

<style>
	a {
		color: var(--highlight);
		text-decoration: none;
		transition: color 0.5s, background 0.5s;
	}

	a:hover {
		color: var(--foreground);
		background: var(--highlight);
	}
</style>
