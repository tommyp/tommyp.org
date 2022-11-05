<script lang="ts">
	import { mouseCoOrdsVars } from '$lib/actions/mouseCoOrdsVars';
</script>

<div class="canvas" use:mouseCoOrdsVars />

<style>
	.canvas {
		--x-percent: calc(var(--mouse-x));
		z-index: -1;
		position: fixed;
		top: 0;
		bottom: 0;
		height: 100vh;
		width: 100vw;
		background-color: #99e4ff;
		background-image: radial-gradient(at 52% 0%, hsla(38, 69%, 75%, 1) 0px, transparent 50%),
			radial-gradient(at 81% 32%, hsla(226, 62%, 75%, 1) 0px, transparent 50%),
			radial-gradient(at 26% 80%, hsla(64, 85%, 70%, 1) 0px, transparent 50%),
			radial-gradient(at 25% 4%, hsla(101, 82%, 74%, 1) 0px, transparent 50%),
			radial-gradient(at var(--mouse-x) var(--mouse-y), hsla(281, 87%, 75%, 1) 0px, transparent 50%),
			radial-gradient(at 51% 90%, hsla(253, 65%, 75%, 1) 0px, transparent 50%),
			radial-gradient(at 86% 57%, hsla(322, 77%, 72%, 1) 0px, transparent 50%);
	}
</style>
