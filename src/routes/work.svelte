<script>
	import Footer from '../components/Footer.svelte';
</script>

<div>
	<main>
		<p>
			I've worked on big teams like <a href="https://deliveroo.co.uk/" class="deliveroo">
				Deliveroo</a
			>
			and
			<a href="https://www.gov.uk/" class="gov">GOV.UK</a>, and small teams like
			<a href="https://www.goodclub.co.uk/" class="goodclub"> Good Club</a>. I've also worked on
			smaller projects like Conversations With A Shipwreck and Govbins.
		</p>
		<p />
		I can work with JavaScript, Ruby, Elixir and many other technologies.
	</main>

	<Footer />
</div>

<style>
	main {
		width: 100vw;
		height: 90vh;
		padding: 2rem 4rem;
		font-size: 4rem;
		font-family: 'Mattone', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background: var(--background);
		color: var(--foreground);
	}

	p {
		margin: 0;
		margin-bottom: 3rem;
	}

	a {
		text-decoration: none;
		transition: color 0.5s, background 0.5s;
	}

	.deliveroo {
		color: #00ccbb;
	}

	.deliveroo:hover {
		color: var(--foreground);
		background: #00ccbb;
	}

	.gov {
		color: #1d70b8;
	}

	.gov:hover {
		color: var(--foreground);
		background: #1d70b8;
	}

	.goodclub {
		color: #0db98c;
	}

	.goodclub:hover {
		color: var(--foreground);
		background: #0db98c;
	}
</style>
