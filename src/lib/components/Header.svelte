<script>
	import { fly } from 'svelte/transition';
</script>

<header>
	<nav>
		<ul>
			<li class="logo">
				<a href="/"> Tommy <span>Palmer</span> </a>
			</li>

			<li>
				<a href="/work"> Work </a>
			</li>
			<li>
				<a href="/about"> About </a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		align-items: center;
		font-family: 'Mattone', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 2rem;
		padding: 1rem 2rem 0;
		max-width: 1600px;
		margin: 0 auto;
	}

	nav {
		width: 100%;
	}

	ul {
		display: flex;
		justify-content: flex-end;
		margin: 0;
		padding: 0;
		align-items: center;
		gap: 3rem;
		width: 100%;
	}

	.logo {
		margin-right: auto;
	}

	ul.page-nav {
	}

	li {
		padding: 0;
		list-style: none;
		display: flex;
		align-items: center;
	}

	a {
		padding: 1.5rem;
		text-decoration: none;
		text-shadow: none;
		text-transform: uppercase;
		color: var(--highlight);
		border: 3px solid var(--highlight);
	}

	a:hover {
		color: var(--foreground);
		background: var(--green);
		border: 3px solid var(--green);
	}

	@media screen and (max-width: 1240px) {
		header {
			font-size: 1.5rem;
		}

		span {
			display: none;
		}

		ul {
			justify-content: space-between;
		}

		.logo {
			margin: 0;
		}
	}

	@media screen and (max-width: 600px) {
		header {
			width: 100%;
			font-size: 0.75rem;
			padding: 1rem 1rem 0;
		}

		ul {
			gap: 1rem;
			justify-content: space-between;
		}

		a {
			padding: 0.3rem;
			border-bottom-width: 3px;
		}
	}
</style>
