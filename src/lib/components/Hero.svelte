<script lang="ts">
	import Wrapper from './Wrapper.svelte';

	const links = [
		{
			background: '#e1e600',
			color: '#000',
			href: 'https://castrooms.com/',
			text: 'CastRooms',
			subtitle: 'Work'
		},
		{
			href: 'https://lineup.fun',
			text: 'Lineup',
			subtitle: 'Spotify Playlist Generator',
			background: '#95fc0f',
			color: '#fc660f'
		},
		{
			href: 'https://isitshortsweathertoday.com',
			text: 'Shorts',
			subtitle: 'World Famous Weather App',
			background: '#cd3f1c',
			color: '#fff'
		}
	];
</script>

<section>
	<Wrapper>
		<p>I'm a product focussed and creative web developer. I write JavaScript and Elixir.</p>

		<div>
			<ul>
				{#each links as link}
					<li style:--background={link.background}>
						<a href={link.href} target="_blank" rel="noopener noreferrer">
							<span class="subtitle">{link.subtitle}</span>
							<span class="text">{link.text}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</Wrapper>
</section>

<style>
	section {
		font-family: var(--header-font-family);
		grid-column-start: 1;
		grid-column-end: 13;
		color: var(--near-black);
		padding: 2rem 1rem;
		border-bottom: calc(var(--border-width) * 3) solid var(--border-color);
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		font-size: 2rem;
	}

	p {
		font-weight: bold;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	li {
		font-size: 1.5rem;
		width: 100%;
	}
	li .subtitle {
		font-size: 1rem;
		text-transform: uppercase;
	}

	a {
		color: var(--near-black);
		text-decoration: none;
		border: 2px solid var(--near-black);
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		/* overflow: hidden; */
		transition: all 0.25s ease-in-out;
	}

	a:hover {
		border-radius: 0;
		background: var(--background);
	}

	@media screen and (min-width: 968px) {
		section {
			padding: 0 4rem 2rem;
			line-height: 1.1;
			font-size: 4rem;
		}

		p {
			margin: 1.5rem 0;
		}

		ul {
			flex-direction: row;
			flex-wrap: nowrap;
			gap: 2rem;
		}

		li {
			width: 33%;
			font-size: 3.5rem;
		}

		li a {
			padding: 0.5rem 1rem;
			border-radius: 2rem;
		}
	}
</style>
