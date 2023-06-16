<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	const links: { path: string; text: string }[] = [
		{ path: '/blog', text: 'Blog' },
		{ path: '/about', text: 'About' }
	];

	let isHovered = true;

	$: currentLink = links.find((link) => $page.url.pathname.includes(link.path));
	$: console.log(currentLink);
</script>

<header
	class:isHovered
	on:touchstart={() => (isHovered = true)}
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => setTimeout(() => (isHovered = false), 1000)}
	style:--links-length={links.length}
>
	<nav>
		<ul>
			<li>
				<h1>
					<a class:active={!currentLink} href="/">Tommy Palmer</a>
				</h1>
			</li>

			{#each links as link, index}
				{@const active = currentLink === link}
				<li class="dropdown" transition:fly={{ y: -50, duration: 200 }} style:--link-index={index}>
					<a href={link.path} class:active>
						{link.text}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		margin: 0 auto;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		font-size: 1rem;
		padding: 1rem;
		height: 4rem;
		position: fixed;
		z-index: 20;
	}

	nav {
		width: 15rem;
	}

	ul {
		display: flex;
		flex-direction: column;
		/* align-self: flex-start; */
		gap: 0.5rem;
		margin: 0;
		padding: 0;
		/* width: 100%; */

		position: relative;
	}

	li {
		padding: 0;
		list-style: none;
		text-align: center;
		width: 100%;
	}

	a {
		display: block;
		text-decoration: none;
		text-transform: uppercase;
		color: var(--near-black);
		background: var(--white);
		width: 100%;
		font-size: 1rem;
		padding: 0.5rem;
		font-weight: bold;
	}

	a:hover {
		color: var(--highlight);
	}

	a.active {
		color: var(--foreground);
		background: var(--highlight);
	}

	li:has(h1) {
		z-index: 100;
	}

	.dropdown,
	header:not(.isHovered) .dropdown {
		z-index: calc(99 - var(--link-index));
		/* position: absolute; */
		/* top: 0; */
		transform: translateY(
			calc(-100% * calc(var(--link-index) + 1) - calc(0.5rem * calc(var(--link-index) + 1)))
		);
		transition: all 0.2s ease-in-out;
	}

	header:hover .dropdown,
	header.isHovered .dropdown {
		transform: translateY(0);
	}

	@media screen and (min-width: 968px) {
		header {
			/* flex-direction: row; */
		}

		nav a {
			font-size: 1.5rem;

			align-items: center;
		}

		ul {
			display: flex;
			flex-direction: column;
			height: 100%;
		}

		li a {
			height: 100%;
		}
	}
</style>
