<script>
	import { onMount } from 'svelte';
	import GlslCanvas from 'glslCanvas?client';
	import shader from '$lib/shader';
	import { browser } from '$app/env';

	let canvasTag;
	let sandbox;
	let width;
	let height;

	onMount(() => {
		sandbox = new GlslCanvas(canvasTag);
		sandbox.load(shader);
		if (window) {
			width = window.outerWidth;
			height = window.outerHeight;

			window.addEventListener('resize', () => {
				width = window.outerWidth;
				height = window.outerHeight;
			});
		}
	});
</script>

<canvas bind:this={canvasTag} {width} {height} />

<style>
	canvas {
		z-index: -1;
		position: absolute;
	}
</style>
