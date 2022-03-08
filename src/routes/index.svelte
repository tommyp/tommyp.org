<script>
	import TextCanvas from '../components/TextCanvas.svelte';
	import PhotoCanvas from '../components/PhotoCanvas.svelte';
	import ContactStickver from '../components/ContactSticker.svelte';
	import Header from '../components/Header.svelte';
	import Main from '../layout/Main.svelte';

	let vibes = 2;
</script>

<div>
	<Main>
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
	</Main>
</div>

<style>
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

	@media screen and (max-width: 900px) {
		section.img-container,
		section.text-container {
			width: 100%;
		}
	}
</style>
