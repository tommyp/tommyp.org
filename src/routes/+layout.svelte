<script>
	import Background from '$lib/components/graphics/Background.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/style.scss';

	import { fade } from 'svelte/transition';

	export let data;
</script>

<Background />
<section>
	<Header />
	{#key data.currentRoute}
		<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
			<slot />
		</main>
	{/key}
	<Footer />
</section>

<style>
	section {
		display: grid;
		grid-template-rows: min-content minmax(min-content, auto) min-content;
		min-height: 100vh;
	}
</style>
