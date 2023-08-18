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
		<main in:fade={{ duration: 150 }} out:fade={{ duration: 150 }}>
			<slot />
			<Footer />
		</main>
	{/key}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow-x: hidden;
	}

	main {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
		justify-content: space-between;
		margin-top: 3.5rem;
	}

	@media screen and (min-width: 968px) {
		main {
			margin-top: 5rem;
		}
	}
</style>
