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
		font-family: 'Mattone', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

		padding: 1rem 1rem 0;
		max-width: 1600px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		font-size: 1rem;
	}

	nav {
		margin-top: 1rem;
	}

	ul {
		display: flex;
		margin: 0;
		padding: 0;
		align-items: center;
		gap: 2rem;
		width: 100%;
	}

	.logo {
		display: block;
	}

	li {
		padding: 0;
		list-style: none;
		display: flex;
		align-items: center;
	}

	a {
		padding: 1.5rem;
		text-decoration: none;
		text-shadow: none;
		text-transform: uppercase;
		color: var(--highlight);
		border: 3px solid var(--highlight);
	}

	nav a {
		font-size: 0.8rem;
		border-radius: 3rem;
	}

	nav a.active {
		color: var(--foreground);
		background: var(--highlight);
		border: 3px solid var(--highlight);
	}

	a:hover {
		color: var(--foreground);
		background: var(--highlight);
		border: 3px solid var(--highlight);
	}

	@media screen and (min-width: 968px) {
		header {
			padding: 1rem 2rem 0;
			flex-direction: row;
		}

		h1 {
			font-size: 1.25rem;
		}

		.logo {
			margin: 0;
		}

		nav {
			margin: 1rem 0;
		}

		nav a {
			font-size: 1.25rem;
		}
	}
</style>
