<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	const links: { path: string; text: string }[] = [
		{ path: '/blog', text: 'Blog' },
		{ path: '/about', text: 'About' }
	];

	let isHovered = false;

	$: currentLink = links.find((link) => $page.url.pathname.includes(link.path));
</script>

<header on:mouseenter={() => (isHovered = true)} on:mouseleave={() => (isHovered = false)}>
	<nav>
		<ul>
			<li class="logo">
				<h1>
					<a class={!currentLink ? 'active' : ''} href="/">Tommy Palmer</a>
				</h1>
			</li>
			{#if isHovered}
				{#each links as link}
					<li class="nav" transition:fly={{ y: -50, duration: 200 }}>
						<a href={link.path} class={currentLink ? 'active' : ''}>
							{link.text}
						</a>
					</li>
				{/each}
			{/if}
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
	}

	header:hover a {
		background: var(--white);
	}

	ul {
		display: flex;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	.logo {
		border: var(--border-width) solid var(--border-color);
	}

	h1 a {
		font-weight: bold;
		padding: 0.5rem 1rem;
		margin: 0;

		color: var(--near-black);
	}

	li {
		padding: 0;
		list-style: none;

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
		padding: 0.5rem;
	}

	li a:hover {
		background: var(--highlight);
	}

	li:first-of-type a {
		border-bottom: none;
	}

	a:hover {
		color: var(--foreground);
	}

	a.active {
		color: var(--foreground);
		background: var(--highlight);
	}

	@media screen and (min-width: 968px) {
		header {
			/* flex-direction: row; */

			position: absolute;
			top: 20px;
			left: 20px;
			width: var(--sidebar-width);
		}

		h1 a {
			padding: 1rem 2rem;
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
		}
	}
</style>
