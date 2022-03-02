<script>
	import P5 from 'p5-svelte';
	let img;
	let graphic;
	const width = 600;
	const height = 600;

	const sketch = (p5) => {
		p5.preload = () => {
			img = p5.loadImage('/images/wall.jpg');
		};

		p5.setup = () => {
			p5.createCanvas(width, height);

			console.log(img);

			graphic = p5.createGraphics(width, height);
			graphic.image(img, p5.width / 2 - img.width / 2, p5.height / 2 - img.height / 2);
		};

		p5.draw = () => {
			p5.clear();

			const tileSize = 30;
			const xCols = p5.width / tileSize;
			const yCols = p5.height / tileSize;
			const midX = xCols / 2;
			const midY = yCols / 2;

			const center = p5.createVector(p5.width / 2, p5.height / 2);

			for (let x = 0; x < xCols; x++) {
				for (let y = 0; y < yCols; y++) {
					const tileVector = p5.createVector(tileSize * x, tileSize * y);
					const distance = tileVector.dist(center);

					const wave = 0.05 * distance;

					const distortionX = p5.sin((p5.frameCount * wave) / 1000 + x * 0.5 + y * 0.3) * 30;
					const distortionY = p5.sin((p5.frameCount * wave) / 1000 + x * 0.5 + y * 0.1) * 30;

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

<P5 {sketch} debug />
