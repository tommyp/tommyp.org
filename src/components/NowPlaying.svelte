<script lang="ts">
	interface Player {
		isPlaying: boolean;
		songUrl?: string;
		title?: string;
		artist?: string;
	}
	const PUBLIC_URL = import.meta.env.PUBLIC_URL;

	let playerPromise: Promise<Player> = $derived.by(async () => {
		const resp = await fetch(`${PUBLIC_URL}/api/spotify.json`);
		const spotifyResponse = await resp.json();
		return {
			isPlaying: spotifyResponse.isPlaying,
			songUrl: spotifyResponse.songUrl,
			title: spotifyResponse.title,
			artist: spotifyResponse.artist
		};
	});
</script>

{#await playerPromise then player}
	<a class="now-playing" href={player.songUrl}>
		Now playing:
		{#if player.isPlaying}
			{player.title} - {player.artist}
		{/if}
	</a>
{/await}

<style>
	.now-playing {
		--background: var(--button-hover-background-color);
		--text-color: var(--button-hover-text-color);
	}

	a {
		display: block;
		color: var(--text-color);
		text-decoration: none;
		border-bottom: 1px solid var(--text-color);
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
