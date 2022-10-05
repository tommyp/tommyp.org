<script lang="ts">
	export let href: string;
	export let title: string;
	export let subtitle: string;
</script>

<a {href}>
	<h5>{subtitle}</h5>
	<h3>{title}</h3>
	<div class="description">
		<slot />
	</div>
</a>

<style>
	a {
		text-decoration: none;
		border: 4px solid var(--color);
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		color: #000;
		grid-column-start: 1;
		grid-column-end: 1;
		background-color: var(--color);
		border-radius: 1rem;
	}

	a:hover {
		color: var(--primary);
		transform: scale(1.01);
	}

	h5 {
		font-size: 0.8rem;
		font-weight: bold;
		margin: 0;
		text-transform: uppercase;
	}

	h3 {
		font-size: 2rem;
		font-weight: bold;
		margin: 0;
	}

	.description {
		margin-top: 1rem;
		font-family: var(--header-font-family);
		font-size: 1.25rem;
		color: var(--primary);
	}

	@media screen and (min-width: 968px) {
		a {
			grid-column-start: var(--grid-col-start);
			grid-column-end: var(--grid-col-end);
		}

		h5 {
			font-size: 0.8rem;
		}

		h3 {
			font-size: 4rem;
		}
	}
</style>
