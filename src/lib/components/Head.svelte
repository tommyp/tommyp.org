<script lang="ts">
	import { escape } from 'html-escaper';

	export let heading: string = undefined;
	export let color: string = undefined;

	const ogParams: URLSearchParams = new URLSearchParams();
	$: if (heading) {
		ogParams.set('heading', escape(heading));
		ogParams.set('color', color?.replace('#', ''));
	}
</script>

<svelte:head>
	<meta property="og:image" content={`https://tommyp.org/og?${ogParams.toString()}`} />
	<meta property="twitter:image" content={`https://tommyp.org/og?${ogParams.toString()}`} />
	<title>{heading ? `${heading} | ` : ''}Tommy Palmer | Web Developer based in London</title>
</svelte:head>
