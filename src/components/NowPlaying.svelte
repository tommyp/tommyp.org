<script lang="ts">
	const PUBLIC_URL = import.meta.env.PUBLIC_URL;
	const resp = await fetch(`${PUBLIC_URL}/api/spotify.json`);
	const spotifyResponse = await resp.json();
</script>

{#if spotifyResponse.isPlaying}
	<a class="now-playing" href={spotifyResponse.songUrl}>
		Now playing: {spotifyResponse.title} - {spotifyResponse.artist}
	</a>
{/if}

<style>
	.now-playing {
		--background: var(--button-hover-background-color);
		--text-color: var(--button-hover-text-color);
	}

	a {
		display: block;
		color: var(--text-color);
		text-decoration: none;

		padding: 0.5rem;
	}

	a:hover {
		background: var(--text-color);
		color: var(--background-color);
	}

	@media (min-width: 992px) {
		.now-playing {
			border: 0;
			border-left: 1px solid var(--text-color);
		}
	}
</style>
