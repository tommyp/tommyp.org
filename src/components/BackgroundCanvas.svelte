<script>
	import { onMount } from 'svelte';
	import GlslCanvas from 'glslCanvas?client';
	import shader from '$lib/shader';
	import { browser } from '$app/env';

	let canvasTag;
	let sandbox;
	let width;
	let height;
	let x = 0.5;
	let y = 0.5;
	let isMoving = false;

	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let coords = tweened(
		{ x: 0.5, y: 0.5 },
		{
			duration: 5000,
			easing: cubicOut
		}
	);

	onMount(() => {
		sandbox = new GlslCanvas(canvasTag);
		sandbox.load(shader);
		sandbox.setUniform('origin', 0.5, 0.5);
		if (window) {
			width = window.innerWidth;
			height = window.innerHeight;

			window.addEventListener('resize', () => {
				width = window.innerWidth;
				height = window.innerHeight;
			});

			window.addEventListener('mousemove', (e) => {
				coords.set({
					x: e.clientX / window.innerWidth,
					y: 1 - e.clientY / window.innerHeight
				});

				sandbox.setUniform('origin', $coords.x, $coords.y);
			});
		}
	});
</script>

<canvas bind:this={canvasTag} {width} {height} />

<style>
	canvas {
		width: 100vw;
		height: 100vh;
		max-width: 100vw;
		max-height: 100vh;
		z-index: -1;
		position: fixed;
	}
</style>
