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

	const vec2 = (e) => {
		return {
			x: e.clientX / window.outerWidth,
			y: e.clientY / window.outerHeight
		};
	};

	onMount(() => {
		sandbox = new GlslCanvas(canvasTag);
		sandbox.load(shader);
		sandbox.setUniform('origin', 0.5, 0.5);
		if (window) {
			width = window.outerWidth;
			height = window.outerHeight;

			window.addEventListener('resize', () => {
				width = window.outerWidth;
				height = window.outerHeight;
			});

			window.addEventListener('mousemove', (e) => {
				const v = vec2(e);

				x = v.x;
				y = v.y;

				sandbox.setUniform('origin', x, y);
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
