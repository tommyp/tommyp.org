<script lang="ts">
	export let pathName: string;
	const links = [
		{
			label: 'Blog',
			url: '/blog'
		},
		{
			label: 'About',
			url: '/about'
		},
		{
			label: 'Links',
			url: '/links'
		}
	];

	$: currentPath = pathName.split('/')[1];
	$: activeLink = links.find((link) => link.url === `/${currentPath}`);

	let dropdownOpen = false;
</script>

<header class:dropdownOpen>
	<nav>
		<ul>
			<li>
				<h1>
					<a class={currentPath == '' ? 'active' : ''} href="/">Tommy Palmer</a>
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
				<li class="dropdown" style:--link-index={index}>
					<a class={link == activeLink ? 'active' : ''} href={link.url}>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		font-weight: bold;
		text-transform: uppercase;
		font-size: var(--text-lg);
		width: 100%;
		position: absolute;
		top: 0;
	}

	h1 {
		font-size: inherit;
		font-weight: inherit;
		margin: 0;
		display: flex;
	}

	h1 button {
		appearance: none;
		border: none;
		background: white;
		color: var(--button-text-color);
		border-left: 4px solid var(--button-text-color);
	}
	h1 svg {
		width: 3rem;
	}

	ul {
		display: flex;
		list-style: none;
		margin: 0;
		flex-direction: column;
		/* justify-items: stretch; */
		position: relative;
	}

	li {
		flex: 1;
		background-color: var(--button-background-color);
	}

	li:has(h1) {
		z-index: 100;
	}

	a {
		width: 100%;
		background-color: var(--button-background-color);
		display: flex;
		align-items: center;
		text-decoration: none;
		color: var(--button-text-color);
		padding: 0.5rem 0.5rem;
	}

	a.active,
	a:hover {
		background-color: var(--button-hover-background-color);
		color: var(--button-hover-text-color);
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

	@media (min-width: 576px) {
		header {
			position: relative;
		}
		ul {
			flex-direction: row;
		}

		li {
			border-right: 1px solid var(--border-color);
		}

		li:last-child {
			border-right: none;
		}

		a {
			background-color: var(--bg-color);
			color: var(--text-color);
		}

		header {
			border-bottom: 1px solid var(--border-color);
		}

		h1 button {
			display: none;
		}

		.dropdown,
		header:not(.dropdownOpen) .dropdown {
			position: relative;
			transform: translateY(0);
			transition: none;
		}
	}
</style>
