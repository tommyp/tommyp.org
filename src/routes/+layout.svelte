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
			<Footer />
		</main>
	{/key}
</section>

<style>
	section {
		--sidebar-width: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	main {
		margin-left: var(--sidebar-width);
		display: flex;
		min-height: 100vh;
		flex-direction: column;
		justify-content: space-between;
	}

	@media screen and (min-width: 968px) {
		section {
			--sidebar-width: 300px;

			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 200px 100% 1fr;
		}
	}
</style>
