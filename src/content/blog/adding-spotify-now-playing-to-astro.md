---
title: Adding Spotify now playing to Astro
date: 2025-08-07
subtitle: Live on air
titleBgColor: '#103979ff'
titleColor: '#FF3E00'
categories: [personal, web]
---

I'm working on a new version of [Lineup.fun](https://lineup.fun/), and because I can't finish one side project without starting another one, I spent some time recently adding a _Now Playing_ section to the footer here. This post is a guide for doing this in Astro, with a little bit of Svelte.

What we're going to do is set up an API route that is signed in as you, so if you're playing a track it will return the track's data. Just like how if you listen on your phone with Spotify open on your computer the desktop app or the web browser is showing the same track.

_I mostly followed [this great guide](https://thomasmoran.dev/snippets/spotify-currently-playing/spotify-currently-playing/) with a few changes_, but I've laid out all the steps here anyways.

### Authorisation

1. Create your app in the [Spotify Developer portal](https://developer.spotify.com/), using `https://127.0.0.1:4321` for the callback URL and select _Web API_ under the _"Which API/SDKs are you planning to use?"_ section. Copy the `client_id`.

2. Make a GET request to the following URL replacing `YOUR_CLIENT_ID` with yours:

```
https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=https://127.0.0.1:4321&scope=user-read-currently-playing
```

3. Authorise the application.

4. This will redirect you back to your local app with a long URL, copy that somewhere. This contains your authorisation code, which we will then exchange for an access code.

5. Base64 encode this: `YOUR_CLIENT_ID:YOUR_CLIENT_SECRET`. If have Node installed, which you probably do if you're using Astro, run `nodejs` in your terminal and then you can use this to encode it:

```javascript
const client_id = YOUR_CLIENT_ID;
const client_id = 'YOUR_CLIENT_ID';
const client_secret = 'YOUR_CLIENT_SECRET';
Buffer.from(client_id + ':' + client_secret).toString('base64');
```

6. Make a POST request with the following params:

```
{
	grant_type: "authorization_code",
	code: YOUR_AUTHORISATION_CODE_FROM_STEP_4
	redirect_uri: "https://127.0.0.1:4321"
}
```

Along with an Authorisation header of the base64 value from step 5:

```
Basic BASE64_ENCODED_FROM_STEP_5
```

The response from this will include a `refresh_token`. This is the last thing we need for our API access, so copy this somewhere to use later.

### The backend

Add your client ID, client secret, and refresh token, as environment variables:

```properties
# .env
CLIENT_ID=
CLIENT_SECRET=
REFRESH_TOKEN=
```

Now we can add our endpoint that our component will hit, the code that hits Spotify, and the Typescript interface, if required:

```typescript
// src/pages/api/spotify.json.ts
import type { APIRoute } from 'astro';
import { getNowPlaying } from '../../lib/spotify';
import type { SpotifyPlayerResponse } from '../../lib/types';

export const GET: APIRoute = async () => {
	const response = await getNowPlaying();

	if (response.status === 204 || response.status > 400) {
		return new Response(
			JSON.stringify({
				isPlaying: false
			})
		);
	}

	const player = (await response.json()) as SpotifyPlayerResponse;
	const isPlaying = player.is_playing;
	const title = player.item.name;
	const artist = player.item.artists.map((_artist) => _artist.name).join(', ');
	const album = player.item.album.name;
	const albumImageUrl = player.item.album.images[0].url;
	const songUrl = player.item.external_urls.spotify;
	const duration = player.item.duration_ms;
	const progress = player.progress_ms;

	return new Response(
		JSON.stringify({
			isPlaying,
			title,
			artist,
			album,
			albumImageUrl,
			songUrl,
			duration,
			progress
		})
	);
};
```

```typescript
// src/lib/spotify.ts
import querystring from 'querystring';

const clientID = import.meta.env.CLIENT_ID;
const clientSecret = import.meta.env.CLIENT_SECRET;
const refreshToken = import.meta.env.REFRESH_TOKEN;

const TOKEN_URL = `https://accounts.spotify.com/api/token`;
const basicAuth = Buffer.from(`${clientID}:${clientSecret}`).toString('base64');

const getAccessToken = async () => {
	const response = await fetch(TOKEN_URL, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basicAuth}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: querystring.stringify({
			grant_type: 'refresh_token',
			refresh_token: refreshToken
		})
	});

	return response.json();
};

const NOW_PLAYING_URL = `https://api.spotify.com/v1/me/player/currently-playing`;

const getNowPlaying = async () => {
	const { access_token } = await getAccessToken();

	return fetch(NOW_PLAYING_URL, {
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	});
};

export { getAccessToken, getNowPlaying };
```

```typescript
// '../../lib/types';
export interface SpotifyPlayerResponse {
	is_playing: boolean;
	item: {
		name: string;
		artists: { name: string }[];
		album: {
			name: string;
			images: { url: string }[];
		};
		external_urls: {
			spotify: string;
		};
		duration_ms: number;
	};
	progress_ms: number;
}
```

### The frontend

Astro uses a concept called [Islands Architecture](https://docs.astro.build/en/concepts/islands/), which means that Astro only runs client side JavaScript on specific components. To do this, you can use many different [frontend frameworks](https://docs.astro.build/en/guides/framework-components/), but I chose Svelte. This is my component placed in the footer:

```svelte
 <!-- NowPlaying.svelte -->
<script lang="ts">
	interface Player {
		isPlaying: boolean;
		songUrl?: string;
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
				artist: spotifyResponse.artist
			};
		} catch (error) {
			return { isPlaying: false };
		}
	})();
</script>

{#await playerPromise then player}
	{#if player.isPlaying}
		<a class="now-playing" href={player.songUrl}>
			Now playing:
			{player.title} - {player.artist}
		</a>
	{/if}
{/await}
```

A few things to note here:

- I'm not using all of the response from `/api/spotify.json`, but I've left it in the endpoint to show what you could use from the Spotify response.
- This component only renders anything if I'm currently playing. There's nothing stopping you from doing like an \_on air/off air` thing.

And the last bit is to import and render our Svelte component from an Astro file:

```jsx
<NowPlaying client:idle />
```

Spot the `client:idle` property. This is one of Astro's [client directives](https://docs.astro.build/en/reference/directives-reference/#client-directives) that tell it how to hydrate the component. Use whatever is appropriate for your use case.

Now, if you play a track on Spotify and refresh, you'll see _Now playing: We Like To Party! (Vengabus) - Vengaboys_ or whatever other bangers you choose to listen to.

### Wrapping up

There's only a few steps here, but it's an interesting way to use the Spotify API. Thanks again to [Thomas Moran](https://thomasmoran.dev/) for his [original post](https://thomasmoran.dev/snippets/spotify-currently-playing/spotify-currently-playing/), and for writing most of the code that I adapted for Astro.

If you use this guide, or have any questions or feedback, get in touch via [email](mailto:hi@tommyp.org) or [Bluesky](https://bsky.app/profile/tommyp.bsky.social).

## Honourable mentions

- 🎮 In prep for The Outer Worlds 2 I got the Spacer's Choice Edition of the original on sale. I dropped off near the end of it the first time and so some bits where familiar, but after playing Avowed I now understand what Obsidian aims for with their games and I'm really enjoying it.
- 🎮 Wheel World is so nice but holding the trigger to accelerate absolutely wrecked the RSI in my right forearm. With my knee injury real cycling is off the table too, so not being able to finish it was disappointing.
- 📖 The Mountain In The Sea was fantastic. It made me feel bad about eating Octopus, which I suppose is the point of it.
- 📺 Foundation season 3 is great. I'm waiting for it to finish before reading the second book again.
- 📺 Long Way Home has given me another burst of interest in getting a motorbike. Lila and my Mum aren't too pleased, but my mates are very encouraging.
- 🇮🇪 Back home this week for some family stuff. It's weird moving away and seeing everyone age so much. Like watching a TV show with a time jump between seasons, there's whole bits of life that I just wasn't around for. My parents, aunts, uncles, and my granny, are all getting on and the time I spend with them is precious.
