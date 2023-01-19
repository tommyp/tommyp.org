<script lang="ts">
	export let href: string;
	export let title: string;
	export let subtitle: string = null;
	export let emoji: string = null;
	export let inverse: boolean = false;

	$: isInverse = inverse ? 'inverse' : '';
</script>

<a {href} class:isInverse>
	{#if emoji}
		<div class="emoji">
			{emoji}
		</div>
	{/if}
	<div class="text">
		{#if subtitle}
			<h5>{subtitle}</h5>
		{/if}
		<h3>{title}</h3>
		<div class="description">
			<slot />
		</div>
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
		border-radius: 1rem;
		overflow: hidden;
		gap: 1rem;
	}

	a.isInverse {
		color: var(--near-black);
	}

	a:hover {
		transform: scale(1.01);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}

	.text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.emoji {
		font-size: 8rem;
		margin: 0;
		margin-left: -9rem;

		transition: all 0.5s;
	}

	a:hover .emoji {
		display: block;
		margin-left: 0;
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

		.text {
			display: flex;
			height: 100%;
			justify-content: space-between;
		}
	}
</style>
