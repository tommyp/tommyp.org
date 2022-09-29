<script lang="ts">
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
					<a href={link.path} class={window.location.pathname.includes(link.path) ? 'active' : ''}>
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
		font-size: 2rem;
		padding: 2rem 2rem 0;
		max-width: 1600px;
		margin: 0 auto;
	}

	nav {
		width: 100%;
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
		border-radius: 3rem;
	}

	a:hover {
		color: var(--foreground);
		background: var(--highlight);
		border: 3px solid var(--highlight);
	}

	@media screen and (max-width: 1240px) {
		header {
			font-size: 1.5rem;
			padding: 1rem 1rem 0;
		}

		span {
			display: none;
		}

		.logo {
			margin: 0;
		}
	}
</style>
