<script>
	import Two from 'two.js';
	import { onMount } from 'svelte';

	let elem = null;
	onMount(() => {
		var two = new Two({
			fitted: true
		}).appendTo(elem);

		// Two.js has convenient methods to make shapes and insert them into the scene.
		var radius = 40;
		let x;
		// let x = two.width * 0.5;
		var y = two.height * 0.35;
		var circle = two.makeCircle(x, y, radius);
		var circle2 = two.makeCircle(x, y + radius + 50, radius);

		var width = 100;
		var height = 100;
		// var rect = two.makeRectangle(x, y, width, height);

		// The object returned has many stylable properties:
		circle.fill = 'var(--neon-green)';
		circle2.fill = 'var(--neon-green)';
		// And accepts all valid CSS color:
		circle.noStroke();
		circle2.noStroke();
		circle.linewidth = 5;

		// rect.fill = 'rgb(0, 200, 255)';
		// rect.opacity = 0.75;
		// rect.noStroke();
		let osc;

		two.bind('update', (frameCount) => {
			// This code is called everytime two.update() is called.
			// Effectively 60 times per second.

			circle.position.x = two.width / 2 + Math.sin(frameCount * 0.025) * 150;
			circle2.position.x = two.width / 2 - Math.sin(frameCount * 0.025) * 150;
		});

		// Don’t forget to tell two to draw everything to the screen
		two.play();
	});
</script>

<section class="graphic" bind:this={elem} />

<style>
	section {
		grid-column-start: var(--grid-col-start);
		grid-column-end: var(--grid-col-end);
	}
</style>
