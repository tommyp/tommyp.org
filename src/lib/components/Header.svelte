<script lang="ts">
	import { page } from '$app/stores';
	const links: { path: string; text: string }[] = [
		{ path: '/blog', text: 'Blog' },
		{ path: '/about', text: 'About' }
	];
</script>

<header>
	<h1><a class="logo" href="/">Tommy Palmer</a></h1>
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
		font-weight: bold;
		width: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		font-size: 1rem;
		/* background: var(--background); */
		border-bottom: var(--border-width) solid var(--border-color);
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

	h1 a {
		font-weight: bold;
		padding: 0.5rem 1rem;
		margin: 0;
		border-bottom: var(--border-width) solid var(--border-color);
		color: var(--near-black);
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
		color: var(--near-black);
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
			/* flex-direction: row; */

			position: fixed;
			width: var(--sidebar-width);
			height: 100vh;
			border-right: var(--border-width) solid var(--border-color);
		}

		h1 a {
			font-size: 3rem;
			padding: 1rem 2rem;
			border-bottom: var(--border-width) solid var(--border-color);
		}

		nav {
			margin: 0;
			height: 100%;
		}

		nav a {
			font-size: 1.5rem;
			padding: 1rem 2rem;
			display: flex;
			align-items: center;
		}

		nav ul {
			display: flex;
			flex-direction: column;
			height: 100%;
		}

		li a {
			height: 100%;
			border-right: 0;
			border-bottom: var(--border-width) solid var(--border-color);
		}
	}
</style>
