<script>
	import Background from '$lib/components/graphics/Background.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/style.scss';

	import { fade } from 'svelte/transition';

	export let data;
</script>

<section>
	<div>
		<Header />
		<Background />
		{#key data.currentRoute}
			<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
				<slot />
			</main>
		{/key}
	</div>
	<Footer />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh;
	}
</style>
