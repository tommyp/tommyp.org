<script>
	import '../stylesheets/normalize.css';
	import '../stylesheets/global.css';
	import BackgroundCanvas from '../components/BackgroundCanvas.svelte';
	import Header from '../components/Header.svelte';
</script>

<BackgroundCanvas />

<Header />
<slot />
