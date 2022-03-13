<script>
	import '$lib/stylesheets/normalize.css';
	import '$lib/stylesheets/global.css';
	import BackgroundCanvas from '$lib/components/BackgroundCanvas.svelte';
	import Header from '$lib/components/Header.svelte';
	import { fade } from 'svelte/transition';
</script>

<div
	transition:fade={{
		duration: 500
	}}
>
	<BackgroundCanvas />
</div>

<Header />
<slot />
