<script>
	import TextCanvas from '../components/TextCanvas.svelte';
	import PhotoCanvas from '../components/PhotoCanvas.svelte';
	import ContactStickver from '../components/ContactSticker.svelte';
	import Header from '../components/Header.svelte';
	import Main from '../layout/Main.svelte';

	let vibes = 5;
	$: wave = vibes / 100;
</script>

<div>
	<div class="vibe-selector">
		<label for="vibes">no vibes</label>
		<input type="range" name="vibes" id="vibes" min="0" max="5" step="0.1" bind:value={vibes} />
		<label for="vibes">max vibes</label>
	</div>

	<Main>
		<section class="img-container">
			{#if vibes >= 1}
				<PhotoCanvas {wave} />
			{:else}
				<img src="/images/wall.jpg" alt="" srcset="" />
			{/if}
		</section>
		<section class="text-container">
			{#if vibes >= 0}
				<TextCanvas {wave} {vibes} />
				<ContactStickver />
			{:else}
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

	.vibe-selector {
		background: white;
		width: 300px;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-family: 'Courier New', Courier, monospace;
		padding: 0.3rem 0.7rem;
		text-align: center;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		border: 3px solid var(--green);
		border-top: 0;
	}

	@media screen and (max-width: 900px) {
		section.img-container,
		section.text-container {
			width: 100%;
		}
	}
</style>
