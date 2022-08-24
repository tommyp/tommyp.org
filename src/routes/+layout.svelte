<script>
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/style.scss';
</script>

<Header />

<main>
	<slot />
</main>

<footer>I'm a footer</footer>
