<script lang="ts">
	interface Player {
		isPlaying: boolean;
		songUrl?: string;
		imageUrl?: string;
		title?: string;
		artist?: string;
	}

	let playerPromise: Promise<Player> = (async () => {
		try {
			const resp = await fetch(`/api/spotify.json`);
			if (!resp.ok) throw new Error('Fetch failed');
			const spotifyResponse = await resp.json();
			return {
				isPlaying: spotifyResponse.isPlaying,
				songUrl: spotifyResponse.songUrl,
				title: spotifyResponse.title,
				artist: spotifyResponse.artist,
				imageUrl: spotifyResponse.albumImageUrl
			};
		} catch (error) {
			return { isPlaying: false };
		}
	})();
</script>

{#await playerPromise then player}
	{#if player.isPlaying}
		<a href={player.songUrl}>
			<img src={player.imageUrl} alt="Album cover" class="album-cover" />
			<p>
				<span class="now-playing">Now playing:</span>
				<span class="title">{player.title}</span>
				<span class="artist">{player.artist}</span>
			</p></a
		>
	{/if}
{/await}

<style>
	img {
		width: 100%;
		max-width: 8rem;
		margin-right: 0.5rem;
	}

	p {
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
	}

	a {
		--background: var(--button-hover-background-color);
		--text-color: var(--button-hover-text-color);
		display: flex;

		color: var(--text-color);
		text-decoration: none;
		border-bottom: 1px solid var(--text-color);
	}

	a:hover {
		background: var(--text-color);
		color: var(--background-color);
	}

	.now-playing {
		font-size: var(--text-md);
	}

	.title {
		font-size: var(--text-xl);
	}

	.artist {
		font-size: var(--text-lg);
	}

	@media (min-width: 1280px) {
		a {
			border: 0;
			border-left: 1px solid var(--text-color);
		}

		img {
			max-width: 4rem;
		}

		p {
			flex-direction: row;
		}

		.now-playing {
			font-size: var(--text-sm);
			display: none;
		}

		.title {
			font-size: var(--text-sm);
		}

		.artist {
			font-size: var(--text-sm);
		}
	}
</style>
