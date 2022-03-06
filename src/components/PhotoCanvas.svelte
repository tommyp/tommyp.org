<script>
	import P5 from 'p5-svelte';
	import { browser } from '$app/env';

	let img;
	let graphic;
	let width = 600;
	let height = 600;
	let scale = 1;
	let tileSize = 30;

	if (browser && window.outerWidth < 900) {
		// scale = 0.7;

		tileSize = 30;
		width = 300;
		height = 300;
	}

	const sketch = (p5) => {
		p5.preload = () => {
			img = p5.loadImage('/images/wall.jpg');
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
			const midX = xCols / 2;
			const midY = yCols / 2;

			const center = p5.createVector(width / 2, height / 2);

			for (let x = 0; x < xCols; x++) {
				for (let y = 0; y < yCols; y++) {
					const tileVector = p5.createVector(tileSize * x, tileSize * y);
					const distance = tileVector.dist(center);

					const wave = 0.05 * distance;

					const distortionX = p5.sin((p5.frameCount * wave) / 1000 + x * 0.5 + y * 0.3) * 30;
					const distortionY = p5.cos((p5.frameCount * wave) / 1000 + x * 0.5 + y * 0.1) * 30;

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

	@media screen and (max-width: 900px) {
		/* .container {
			transform: scale(60%);
		} */
	}
</style>
