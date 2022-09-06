<script>
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/style.scss';

	import { fade } from 'svelte/transition';

	export let data;
</script>

<Header />

{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}

<footer>I'm a footer</footer>

<style>
	footer {
		position: fixed;
		bottom: 0;
		border-top: 4px solid var(--border-color);
		width: 100%;
		padding: 1rem;
		font-family: var(--font-family);
	}
</style>
