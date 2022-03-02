<script>
	import P5 from 'p5-svelte';
	let font;
	let graphic;
	const width = 600;
	const height = 600;
	const wave = 0.05;
	const waveX = 5;
	const waveY = 5;

	const sketch = (p5) => {
		const color = '#2fe4c2';
		const bgColor = '#293752';

		p5.preload = () => {
			font = p5.loadFont('./fonts/basteleur/Basteleur-Bold.woff');
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

			let text = `I'm Tommy\n Palmer`;

			graphic.fill('#ffc800');
			graphic.textFont(font);
			graphic.textSize(80);
			graphic.textLeading(70);
			// graphic.textAlign(p5.LEFT, p5.CENTER);
			graphic.text(text, 0, 100);

			text = `a freelance\nweb developer\nliving in\nLondon`;

			graphic.fill('#ffc800');
			graphic.textFont(font);
			graphic.textSize(65);
			graphic.textLeading(70);
			// graphic.textAlign(p5.LEFT, p5.CENTER);
			graphic.text(text, 0, 300);
		};
	};
</script>

<P5 {sketch} debug />
