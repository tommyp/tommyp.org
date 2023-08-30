<script lang="ts">
	import { escape } from 'html-escaper';

	export let heading: string = undefined;
	export let bgColor: string = undefined;
	export let textColor: string = undefined;
	export let description = 'Creative web developer, working in JavaScript, Ruby & Elixir.';

	const ogParams: URLSearchParams = new URLSearchParams();
	$: if (heading) {
		ogParams.set('heading', escape(heading));
		ogParams.set('bgColor', bgColor?.replace('#', ''));
		ogParams.set('textColor', textColor?.replace('#', ''));
	}

	const title = `${heading ? `${heading} | ` : ''}Tommy Palmer | Web Developer based in London`;
</script>

<svelte:head>
	<meta property="og:image" content={`https://tommyp.org/og?${ogParams.toString()}`} />
	<meta property="twitter:image" content={`https://tommyp.org/og?${ogParams.toString()}`} />
	<meta property="twitter:title" content={title} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta name="description" content={description} />
	<meta property="twitter:description" content={description} />
	<title>{title}</title>
</svelte:head>
