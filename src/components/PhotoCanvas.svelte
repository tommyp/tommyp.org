<script>
	import P5 from 'p5-svelte';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	export let wave;
	let img;
	let imagePath = '/images/wall.jpg';
	let graphic;
	let width;
	let height;
	let scale;
	let tileSize;

	const setup = () => {
		width = 600;
		height = 600;
		scale = 1;
		tileSize = 30;

		if (window.outerWidth < 376) {
			// scale = 0.7;

			imagePath = '/images/wall_mobile.jpg';
			tileSize = 15;
			width = 300;
			height = 300;
		}
	};

	onMount(() => {
		if (window) {
			setup();

			window.addEventListener('resize', setup);
		}
	});

	const sketch = (p5) => {
		p5.preload = () => {
			img = p5.loadImage(imagePath);
		};

		p5.setup = () => {
			p5.createCanvas(width, height);

			graphic = p5.createGraphics(width, height);
			graphic.image(
				img,
				(width / 2 - img.width / 2) * scale,
				(height / 2 - img.height / 2) * scale
			);
		};

		p5.draw = () => {
			p5.clear();

			const xCols = width / tileSize;
			const yCols = height / tileSize;

			const center = p5.createVector(width / 2, height / 2);

			for (let x = 0; x < xCols; x++) {
				for (let y = 0; y < yCols; y++) {
					const tileVector = p5.createVector(tileSize * x, tileSize * y);
					const distance = tileVector.dist(center);

					const waveMain = wave * distance;

					const distortionX =
						p5.sin((p5.frameCount * waveMain) / 1000 + x * 0.5 + y * 0.3) * tileSize;
					const distortionY =
						p5.cos((p5.frameCount * waveMain) / 1000 + x * 0.5 + y * 0.1) * tileSize;

					// const distortion = sin(frameCount * 0.05 + x * 0.5 + y * 0.3) * 50;

					// source
					const sx = x * tileSize;
					const sy = y * tileSize;
					const sw = tileSize + distortionX;
					const sh = tileSize + distortionY;

					// destination
					const dx = x * tileSize;
					const dy = y * tileSize;
					const dw = tileSize;
					const dh = tileSize;

					p5.image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
				}
			}
		};
	};
</script>

<div class="container">
	<P5 {sketch} />
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	@media screen and (max-width: 375px) {
		/* .container {
			transform: scale(60%);
		} */
	}
</style>
