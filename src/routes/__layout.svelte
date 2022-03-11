<script>
	import '../stylesheets/normalize.css';
	import '../stylesheets/global.css';
	import BackgroundCanvas from '../components/BackgroundCanvas.svelte';
	import Header from '../components/Header.svelte';
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
