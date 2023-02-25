<script lang="ts">
	import { page } from '$app/stores';
	const links: { path: string; text: string }[] = [
		{ path: '/blog', text: 'Blog' },
		{ path: '/about', text: 'About' }
	];
</script>

<header>
	<a class="logo" href="/"><h1>Tommy Palmer</h1></a>
	<nav>
		<ul>
			{#each links as link}
				<li>
					<a href={link.path} class={$page.url.pathname.includes(link.path) ? 'active' : ''}>
						{link.text}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		--border-width: 2px;
		font-weight: bold;
		width: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		font-size: 1rem;
		background: var(--background);
		border-bottom: var(--border-width) solid var(--border-color);
		--border-color: var(--neon-green);
	}

	ul {
		display: flex;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	.logo {
		display: block;
		width: 100%;
		margin: 0 auto;
	}

	h1 {
		font-weight: bold;
		padding: 0.5rem 1rem;
		margin: 0;
		border-bottom: var(--border-width) solid var(--border-color);
	}

	li {
		padding: 0;
		list-style: none;
		display: flex;
		align-items: center;
		width: 100%;
	}

	a {
		display: block;
		text-decoration: none;
		text-transform: uppercase;
		color: var(--highlight);
		width: 100%;
	}

	li a {
		font-size: 0.8rem;
		border-right: var(--border-width) solid var(--border-color);
		padding: 0.5rem;
	}

	li:last-of-type a {
		border-right: none;
	}

	nav a.active {
		color: var(--foreground);
		background: var(--highlight);
	}

	a:hover {
		color: var(--foreground);
		background: var(--highlight);
	}

	@media screen and (min-width: 968px) {
		header {
			border-bottom: none;
			flex-direction: row;
			--border-width: 6px;
		}

		h1 {
			font-size: 5rem;
			padding: 1rem 2rem;
			border-bottom: var(--border-width) solid var(--border-color);
			border-right: var(--border-width) solid var(--border-color);
		}

		nav {
			margin: 0;
			height: 100%;
		}

		nav a {
			font-size: 2.5rem;
			padding: 1rem 2rem;
			display: flex;
			align-items: center;
		}

		nav ul {
			display: flex;
			height: 100%;
		}

		li a {
			height: 100%;
			border-right: var(--border-width) solid var(--border-color);
			border-bottom: var(--border-width) solid var(--border-color);
		}
	}
</style>
