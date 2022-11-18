<script lang="ts">
	export let title: string;
	export let subtitle: string = null;
	export let emojiLeft: string = null;
	export let emojiRight: string = null;
	export let animation: string = null;
</script>

<section>
	{#if emojiLeft}
		<div class="emoji">
			{emojiLeft}
		</div>
	{/if}
	<div class="text">
		{#if subtitle}
			<h5>{subtitle}</h5>
		{/if}
		{#if title}
			<h3>{title}</h3>
		{/if}
	</div>
	{#if emojiRight}
		<div class={`emoji ${animation === 'bounce' ? 'bounce' : ''}`}>
			{emojiRight}
		</div>
	{/if}
</section>

<style>
	section {
		text-decoration: none;
		display: flex;
		align-items: center;
		padding: 1.5rem;
		justify-content: center;
		color: var(--foreground);
		grid-column-start: 1;
		grid-column-end: 1;
		background-color: var(--color);
		border-radius: 1rem;
		overflow: hidden;
		gap: 0rem;
	}

	section:hover {
		cursor: s-resize;
	}

	.text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.emoji {
		font-size: 6rem;
		margin: 0;
		transition: all 0.5s;
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

	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-1rem);
		}
		100% {
			transform: translateY(0);
		}
	}

	section:hover .bounce {
		animation: bounce 1s infinite;
	}

	@media screen and (min-width: 968px) {
		section {
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
