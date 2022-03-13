<script>
	import Main from '$lib/layout/Main.svelte';

	export let md;
	import SvelteMarkdown from 'svelte-markdown';
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ delay: 250, duration: 250, x: -100 }} out:fly={{ delay: 0, duration: 250, x: -100 }}>
	<Main>
		<a class="back" href="/">← <span>Back</span></a>
		<div class="markdown">
			<SvelteMarkdown source={md} />
		</div>
	</Main>
</div>

<style>
	:global(a) {
		color: var(--highlight);
	}

	.markdown {
		font-size: 2rem;
		max-width: 60%;

		margin-top: 2rem;
	}

	:global(.markdown img) {
		max-width: 800px;
		width: 100%;
	}

	.back {
		text-decoration: none;
		font-size: 1rem;
		text-transform: uppercase;
		border: 3px solid var(--highlight);
		width: 200px;
		padding: 1rem 0.5rem;
	}

	.back:hover {
		color: var(--foreground);
		background: var(--highlight);
		border: 3px solid var(--highlight);
	}

	:global(h1 a) {
		font-size: 6rem;
		text-decoration: none;
	}
</style>
