<script lang="ts">
	export let href: string;
	export let title: string;
	export let subtitle: string = null;
	export let inverse: boolean = false;
	export let date: string = null;

	$: isInverse = inverse ? 'inverse' : '';
</script>

<a {href} class:isInverse>
	<div class="text">
		<h3>{@html title}</h3>
		{#if subtitle}
			<div class="subtitle">
				<h5>{subtitle}</h5>
				{#if date}
					<h5 class="date">
						{new Date(date).toLocaleDateString('en-GB', {
							dateStyle: 'full'
						})}
					</h5>
				{/if}
			</div>
		{/if}
	</div>
</a>

<style>
	a {
		text-decoration: none;
		/* border: 4px solid var(--color); */
		display: flex;
		align-items: center;
		padding: 1.5rem;
		color: var(--foreground);
		grid-column-start: 1;
		grid-column-end: 1;
		background-color: var(--color);
		border-radius: 2rem;
		border: var(--border-width) solid var(--foreground);
		overflow: hidden;
		gap: 1.5rem;
	}

	a.isInverse {
		color: var(--near-black);
	}

	a:hover {
		border-radius: 0;
	}

	.text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
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

	.subtitle {
		font-family: var(--header-font-family);
		font-size: 1.25rem;
		color: var(--primary);
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		gap: 0.5rem;
	}

	.date {
		opacity: 0.5;
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

		.text {
			display: flex;
			height: 100%;
			justify-content: space-between;
		}

		.subtitle {
			flex-direction: row;
		}
	}
</style>
