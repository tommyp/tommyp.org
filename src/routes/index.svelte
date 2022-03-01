<main>
	<section class="img-container">
		<img src="/images/wall.jpg" alt="" srcset="" />
	</section>
	<section class="text-container">
		<h1>I'm Tommy Palmer</h1>
		<h2>A freelance web developer from Belfast living in London</h2>
	</section>
</main>

<style>
	@font-face {
		font-family: 'Basteleur', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		src: url('./fonts/basteleur/Basteleur-Bold.woff') format('woff'),
			url('./fonts/basteleur/Basteleur-Bold.woff2') format('woff2');
		font-style: bold;
		font-weight: 700;
	}
	main {
		font-family: 'Basteleur';
		font-style: bold;
		display: flex;
		height: 100vh;
		padding-top: 1rem;
	}

	section.img-container {
		display: flex;
		/* justify-content: center; */
		flex-direction: column;
		align-items: center;
		width: 50%;
		padding-top: 1rem;
	}

	section.img-container img {
		object-fit: contain;
		width: 80%;
	}

	section.text-container {
		width: 50%;
	}

	h1 {
		margin: 0;
		font-size: 6rem;
	}

	h2 {
		font-size: 4rem;
	}
</style>
