<script lang="ts">
	import { browser } from '$app/environment';
	import { mouseCoOrdsVars } from '$lib/actions/mouseCoOrdsVars';
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { tweened, type Tweened } from 'svelte/motion';
	let x: number = 0.5;
	let y: number = 0.5;

	const coords: Tweened<{ x: number; y: number }> = tweened(
		{ x, y },
		{
			duration: 2000,
			easing: cubicOut
		}
	);

	let percentages = {
		x: 0,
		y: 0
	};
	onMount(() => {
		coords.subscribe((v) => {
			percentages = {
				x: ((v.x / window.innerWidth) * 100).toPrecision(2),
				y: ((v.y / window.innerHeight) * 100).toPrecision(2)
			};
		});
	});
</script>

<div
	class="canvas"
	use:mouseCoOrdsVars={coords}
	style={`--mouse-x: ${percentages.x}%; --mouse-y: ${percentages.y}%;`}
/>

<style>
	.canvas {
		z-index: -1;
		position: fixed;
		top: 0;
		bottom: 0;
		height: 100vh;
		width: 100vw;
		background-color: #99e4ff;
		background-image: radial-gradient(at 52% 0%, hsla(38, 69%, 75%, 1) 0px, transparent 50%),
			radial-gradient(at 81% 32%, hsla(226, 62%, 75%, 1) 0px, transparent 50%),
			radial-gradient(
				at calc(100% - var(--mouse-y)) calc(100% - var(--mouse-x)),
				hsla(64, 85%, 70%, 1) 0px,
				transparent 50%
			),
			radial-gradient(at 25% 4%, hsla(101, 82%, 74%, 1) 0px, transparent 50%),
			radial-gradient(at var(--mouse-x) var(--mouse-y), hsla(281, 87%, 75%, 1) 0px, transparent 50%),
			radial-gradient(at 51% 90%, hsla(253, 65%, 75%, 1) 0px, transparent 50%),
			radial-gradient(
				at calc(100% - var(--mouse-x)) calc(100% - var(--mouse-y)),
				hsla(322, 77%, 72%, 1) 0px,
				transparent 50%
			);
	}
</style>
