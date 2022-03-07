<script>
	import { onMount } from 'svelte';
	import GlslCanvas from 'glslCanvas?client';
	import shader from '$lib/shader';
	import { browser } from '$app/env';

	let canvasTag;
	let sandbox;

	onMount(() => {
		if (window) {
			sandbox = new GlslCanvas(canvasTag);
			sandbox.load(shader);
		}
	});
</script>

<canvas bind:this={canvasTag} />

<style>
	canvas {
		width: 100vw;
		height: 100vh;
		z-index: -1;
		position: absolute;
	}
</style>
