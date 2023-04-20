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
	<!-- <Footer /> -->
</section>

<style>
	section {
		--sidebar-width: 400px;
		display: grid;
		grid-template-columns: 1fr;
		min-height: 100vh;
	}

	main {
		margin-left: var(--sidebar-width);
	}
</style>
