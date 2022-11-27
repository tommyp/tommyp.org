<script lang="ts">
	import { escape } from 'html-escaper';

	export let prefix: string = undefined;
	export let color: string = undefined;

	let ogParams: string;
	if (prefix) {
		ogParams = `?heading=${escape(prefix)}&color=${color.replace('#', '')}`;
	} else {
		ogParams = '';
	}
</script>

<svelte:head>
	<meta property="og:image" content={`https://tommyp.org/og${ogParams}`} />
	<meta property="twitter:image" content={`https://tommyp.org/og${ogParams}`} />
	<title>{prefix ? `${prefix} | ` : ''}Tommy Palmer | Web Developer based in London</title>
</svelte:head>
