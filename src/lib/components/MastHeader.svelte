<script lang="ts">
	import Wrapper from './Wrapper.svelte';

	export let title: string;
	export let subtitle: string | undefined;
</script>

<header>
	<Wrapper>
		<h1>{title}</h1>
		{#if subtitle}
			<h2>{subtitle}</h2>
		{/if}
	</Wrapper>
</header>

<style>
	header {
		display: flex;
		font-family: var(--header-font-family);
		width: 100%;
		background-color: var(--bgColor);
		border-top: 4px solid var(--titleColor);
		border-bottom: 4px solid var(--titleColor);
		color: var(--titleColor);
		flex-direction: column;
		padding: 1rem 0;
	}

	h1 {
		font-weight: bold;
		font-size: 2rem;
	}

	h2 {
		font-size: 0.8rem;
		font-weight: bold;
		margin: 0;
		text-transform: uppercase;
	}

	@media (min-width: 968px) {
		header {
			padding: 0.5rem 0 2.5rem;
		}
		h1 {
			font-size: 5rem;
			line-height: 1;
			padding: 1rem 2rem 0rem;
		}

		h2 {
			padding: 1rem 2rem 0;
		}
	}
</style>
