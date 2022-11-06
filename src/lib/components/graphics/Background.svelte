<script lang="ts">
	import { mouseCoOrdsVars } from '$lib/actions/mouseCoOrdsVars';
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

	$: percantages = {
		x: (($coords.x / window.innerWidth) * 100).toFixed(0),
		y: (($coords.y / window.innerHeight) * 100).toFixed(0)
	};
</script>

<div
	class="canvas"
	use:mouseCoOrdsVars={coords}
	style={`--mouse-x: ${percantages.x}%; --mouse-y: ${percantages.y}%;`}
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
