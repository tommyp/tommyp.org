<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const scrollPosition = tweened(0, {
		duration: 500,
		easing: cubicOut
	});

	const links: { path: string; text: string }[] = [
		{ path: '/blog', text: 'Blog' },
		{ path: '/about', text: 'About' }
	];

	let dropdownOpen = false;

	onMount(() => {
		let timer = null;
		window.addEventListener('scroll', () => {
			if (timer !== null) {
				clearTimeout(timer);
			}
			timer = setTimeout(function () {
				$scrollPosition = window.scrollY;
			}, 50);
		});
	});

	$: currentLink = links.find((link) => $page.url.pathname.includes(link.path));
</script>

<header
	class:dropdownOpen
	style:--links-length={links.length}
	style:--scroll-top={`${$scrollPosition}px`}
>
	<nav>
		<ul>
			<li>
				<h1>
					<a class:active={!currentLink} href="/">Tommy Palmer</a>
					<button
						on:click|preventDefault={(e) => (dropdownOpen = !dropdownOpen)}
						aria-label="Toggle navigation menu"
						aria-expanded={dropdownOpen}
					>
						{#if dropdownOpen}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
								/>
							</svg>
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						{/if}
					</button>
				</h1>
			</li>

			{#each links as link, index}
				{@const active = currentLink === link}
				<li class="dropdown" style:--link-index={index}>
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
		height: 4rem;
		position: absolute;
		z-index: 20;
		left: 50%;
		top: calc(var(--scroll-top) + 0.5rem);
		transform: translateX(-50%);
	}

	nav {
		width: 15rem;
	}

	h1 {
		display: flex;
	}

	h1 button {
		appearance: none;
		border: none;
		background: white;
		color: var(--near-black);
		border-left: 4px solid var(--highlight);
	}
	h1 svg {
		width: 1rem;
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
	header:not(.dropdownOpen) .dropdown {
		z-index: calc(99 - var(--link-index));
		/* position: absolute; */
		/* top: 0; */
		transform: translateY(
			calc(-100% * calc(var(--link-index) + 1) - calc(0.5rem * calc(var(--link-index) + 1)))
		);
		transition: all 0.2s ease-in-out;
	}

	header:hover .dropdown,
	header.dropdownOpen .dropdown {
		transform: translateY(0);
	}

	@media screen and (min-width: 968px) {
		header {
			left: 0;
			top: var(--scroll-top);
			transform: none;
			padding: 1rem;
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

		h1 button {
			display: none;
		}
	}
</style>
