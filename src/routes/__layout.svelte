<script>
	import '$lib/stylesheets/normalize.css';
	import '$lib/stylesheets/global.css';
	import BackgroundCanvas from '$lib/components/BackgroundCanvas.svelte';
	import Header from '$lib/components/Header.svelte';
	import { fade } from 'svelte/transition';
	import Footer from '$lib/components/Footer.svelte';
</script>

<BackgroundCanvas />

<div class="container">
	<div>
		<Header />
		<slot />
	</div>

	<Footer />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh;
	}
</style>
