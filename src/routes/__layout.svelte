<script>
	import '$lib/stylesheets/normalize.css';
	import '$lib/stylesheets/global.css';
	import BackgroundCanvas from '$lib/components/BackgroundCanvas.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<BackgroundCanvas />

<Header />
<slot />
