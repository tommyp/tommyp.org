<script lang="ts">
	import { escape } from 'html-escaper';

	export let prefix: string = undefined;
	export let color: string = undefined;

	const ogParams: URLSearchParams = new URLSearchParams();
	$: if (prefix) {
		ogParams.set('prefix', escape(prefix));
		ogParams.set('color', color.replace('#', ''));
	}
</script>

<svelte:head>
	<meta property="og:image" content={`https://tommyp.org/og?${ogParams.toString()}`} />
	<meta property="twitter:image" content={`https://tommyp.org/og?${ogParams.toString()}`} />
	<title>{prefix ? `${prefix} | ` : ''}Tommy Palmer | Web Developer based in London</title>
</svelte:head>
