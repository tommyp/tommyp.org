<script>
	import { fly } from 'svelte/transition';
</script>

<footer
	in:fly={{ delay: 250, duration: 250, y: -100 }}
	out:fly={{ delay: 0, duration: 250, y: -100 }}
>
	say hello - <a href="mailto:hi@tommyp.org">hi@tommyp.org</a>
</footer>

<style>
	footer {
		padding: 3rem 2rem 2rem;
		max-width: 1600px;
		margin: 0 auto;
		font-family: 'Mattone', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		width: 100%;
	}

	@media screen and (max-width: 1240px) {
		footer {
			padding: 2rem 1rem 2rem;
		}
	}
</style>
