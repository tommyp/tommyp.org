<script>
	import { fly } from 'svelte/transition';

	const links = [
		{
			href: 'mailto:hi@tommyp.org',
			text: 'email'
		},
		{
			href: 'https://soundcloud.com/syntax-terrorist',
			text: 'Soundcloud'
		},
		{
			href: 'https://github.com/tommyp/',
			text: 'Github'
		},
		{
			href: 'https://www.twitter.com/tommypalmr',
			text: 'Twitter'
		},
		{
			href: 'https://mastodon.social/@tommyp',
			text: 'Mastodon'
		}
	];
</script>

<footer transition:fly={{ duration: 100 }}>
	<ul>
		{#each links as link}
			<li><a href={link.href}>{link.text}</a></li>
		{/each}
	</ul>
</footer>

<style>
	footer {
		border-top: 4px solid var(--near-black);
		max-width: 100%;
		position: relative;
		font-family: var(--font-family);
		background: var(--white);
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	li {
		margin: 0;
	}

	a {
		display: block;
		color: var(--near-black);
		text-decoration: none;
		text-transform: uppercase;
		padding: 1rem;
	}

	a:hover {
		background: var(--near-black);
		color: var(--white);
	}

	@media screen and (min-width: 968px) {
		footer {
			padding: 0rem 2rem;
		}
	}
</style>
