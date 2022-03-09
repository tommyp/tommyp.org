<script>
	export let animate = true;
	import { fly } from 'svelte/transition';
</script>

{#if animate}
	<a
		in:fly={{ delay: 250, duration: 250, x: 0 }}
		out:fly={{ delay: 0, duration: 250, x: 100 }}
		class="btn vibes"
		class:animate
		href="mailto:hi@tommyp.org"
	>
		hire me</a
	>
{:else}
	<a
		in:fly={{ delay: 250, duration: 250, x: 0 }}
		out:fly={{ delay: 0, duration: 250, x: 100 }}
		class="link"
		class:animate
		href="mailto:hi@tommyp.org"
	>
		hire me</a
	>
{/if}

<style>
	.btn.vibes {
		background: var(--pink);
		border: 5px solid var(--pink);
		border-radius: 1rem;
		color: var(--white);
		font-size: 3rem;
		font-style: italic;
		margin-left: 200px;
		margin-top: -90px;
		padding: 0.75rem 1.5rem 0.75rem 0.75rem;
		position: absolute;
		text-decoration: none;
		text-transform: uppercase;

		transition: border 0.5s;
	}

	.btn.animate {
		transform: rotateZ(-10deg);
		animation: pulse 2s infinite ease-in-out;
	}

	.btn:hover {
		border: 5px solid var(--green);
	}

	a.link {
		position: absolute;
		margin-top: -70px;
		color: var(--foreground);
		text-decoration-color: var(--highlight);
	}

	@keyframes pulse {
		0% {
			transform: rotateZ(-10deg) scale(100%);
		}
		50% {
			transform: rotateZ(-10deg) scale(110%);
		}
		100% {
			transform: rotateZ(-10deg) scale(100%);
		}
	}

	@media screen and (max-width: 1024px) {
		.btn.vibes {
			display: block;
			position: relative;
			margin: 0 auto;
			margin-top: 2rem;
			width: 12rem;
			font-size: 1.8rem;

			padding: 0.5rem;
			transform: rotateZ(-30deg);
		}
	}

	@media screen and (max-width: 768px) {
		.btn.vibes {
			font-size: 1.8rem;

			padding: 0.5rem;
			transform: rotateZ(-30deg);
		}
	}
</style>
