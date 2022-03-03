<script>
	import TextCanvas from '../components/TextCanvas.svelte';
	import PhotoCanvas from '../components/PhotoCanvas.svelte';
	import ContactStickver from '../components/ContactStickver.svelte';
	import Footer from '../components/Footer.svelte';

	let vibes = 2;
</script>

<div>
	<main>
		<section class="img-container">
			{#if vibes === 2}
				<PhotoCanvas />
			{:else if vibes == 1}
				<img src="/images/wall.jpg" alt="" srcset="" />
			{/if}
		</section>
		<section class="text-container">
			{#if vibes === 2}
				<TextCanvas />
				<ContactStickver />
			{:else if vibes == 1}
				<h1>I'm Tommy Palmer</h1>
				<h2>A freelance web developer in London</h2>
				<p><a class="chat" href="mailto:hi@tommyp.org">let's chat </a></p>
			{/if}
		</section>
	</main>
	<Footer />
</div>

<style>
	main {
		display: flex;
		font-family: 'Mattone', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		height: 100vh;

		padding: 2rem 4rem;
		width: 100%;
		background-color: var(--background);
		color: var(--foreground);
	}

	::selection {
		color: var(--background);
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

		text-decoration-color: var(--foreground);
		transition: all 0.25s;
	}

	.chat:hover {
		color: var(--highlight);
		text-decoration-color: var(--highlight);
		text-shadow: 3px 0px var(--foreground);
	}

	section.img-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 50%;
	}

	section.img-container img {
		object-fit: contain;
		width: 80%;
	}

	section.text-container {
		width: 50%;
	}
</style>
