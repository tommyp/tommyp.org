<script>
	import P5 from 'p5-svelte';
	import { browser } from '$app/env';

	let font;
	let graphic;
	let width;
	let height;
	let fontSize;
	let subFontSize;
	let leading;
	let subLeading;
	let top;
	let subTop;
	const wave = 0.05; // this to zero to pause
	const waveX = 3;
	const waveY = 3;

	let scale = 1;

	const setSize = () => {
		width = 600;
		height = 600;
		fontSize = 80;
		subFontSize = 65;
		leading = 80;
		subLeading = 70;
		top = 100;
		subTop = 300;
		scale = 1;
		if (browser && window.outerWidth < 600) {
			scale = 0.7;

			width = window.outerWidth - 80;
			height = window.outerWidth;
			fontSize = 35;
			subFontSize = 25;
			leading = 40;
			subLeading = 30;
			top = 50;
			subTop = 150;
		}
	};

	setSize();

	if (browser) {
		window.addEventListener('resize', setSize);
	}

	const sketch = (p5) => {
		p5.preload = () => {
			font = p5.loadFont('./fonts/mattone/Mattone-150.woff');
		};

		p5.setup = () => {
			p5.createCanvas(width, height);

			createCopy();
		};

		p5.draw = () => {
			p5.clear();

			const tileSize = 10;

			for (let x = 0; x < 120; x++) {
				for (let y = 0; y < 60; y++) {
					const distortionX = p5.sin(p5.frameCount * wave + x * 0.5 + y * 0.3) * waveX;
					const distortionY = p5.sin(p5.frameCount * wave + x * 0.5 + y * 1) * waveY;

					const sx = x * tileSize + distortionX;
					const sy = y * tileSize + distortionY;
					const sw = tileSize;
					const sh = tileSize;

					const dx = x * tileSize;
					const dy = y * tileSize;
					const dw = tileSize;
					const dh = tileSize;

					p5.image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
				}
			}
		};

		const createCopy = () => {
			graphic = p5.createGraphics(width, height);

			let text = `I'm Tommy\nPalmer`;

			graphic.fill('#fff');
			graphic.textFont(font);
			graphic.textSize(fontSize);
			graphic.textLeading(leading);
			// graphic.textAlign(p5.LEFT, p5.CENTER);
			graphic.text(text, 0, top);

			text = `A freelance\nweb developer\nliving in\nLondon`;

			graphic.fill('#fff');
			graphic.textFont(font);
			graphic.textSize(subFontSize);
			graphic.textLeading(subLeading);
			// graphic.textAlign(p5.LEFT, p5.CENTER);
			graphic.text(text, 0, subTop);
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
