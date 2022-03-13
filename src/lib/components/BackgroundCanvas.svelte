<script>
	import { onMount } from 'svelte';
	import GlslCanvas from 'glslCanvas?client';
	import shader from '$lib/shaders/shader';

	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let canvasTag;
	let sandbox;
	let width;
	let height;

	let background;
	let foreground;

	let coords;

	$: {
		sandbox && sandbox.setUniform('origin', $coords.x, $coords.y);
	}

	const setTheme = () => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			background = 0.1;
			foreground = 0.15;
		} else {
			background = 0.9;
			foreground = 0.85;
		}

		sandbox.setUniform('foreground', foreground, foreground, foreground, 1.0);
		sandbox.setUniform('background', background, background, background, 1.0);
	};

	onMount(() => {
		sandbox = new GlslCanvas(canvasTag);
		sandbox.load(shader);
		sandbox.setUniform('origin', 0.5, 0.5);

		if (window) {
			width = window.innerWidth;
			height = window.innerHeight;

			setTheme();

			window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setTheme);

			window.addEventListener('resize', () => {
				width = window.innerWidth;
				height = window.innerHeight;
			});

			coords = tweened(
				{ x: 0.5, y: 0.5 },
				{
					duration: 5000,
					easing: cubicOut
				}
			);

			window.addEventListener('mousemove', (e) => {
				coords.set({
					x: e.clientX / window.innerWidth,
					y: 1 - e.clientY / window.innerHeight
				});
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

	@media (prefers-reduced-motion: reduce) {
		canvas {
			display: none;
		}
	}
</style>
