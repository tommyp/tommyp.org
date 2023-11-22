<script lang="ts">
	export let text = '';
	export let radius = 50;
	export let fontSize = 12;
	export let spacing = 0;
	export let direction = 1;
	export let startAngle = 0;
	export let align = 'center';

	$: words = text.split(' ');
</script>

{#each words as word, i}
	<span
		class="word"
		style="transform: rotate({direction *
			(startAngle + spacing * i)}deg) translate({radius}px) rotate({direction *
			90}deg); font-size: {fontSize}px; text-align: {align};"
	>
		{word}
	</span>
{/each}

<style>
</style>
