<script>
	export let heading = undefined;
	export let color = '#04d704';
</script>

{#if heading}
	<div style={`background: ${color};`}>
		{heading}
	</div>
{:else}
	<div class="big-text" style={`background: ${color};`}>
		Tommy Palmer is a web developer in London
	</div>
{/if}

<style>
	div {
		font-family: 'DM Sans';
		display: flex;
		flex-direction: column;

		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
	}

	.big-text {
		font-size: 4rem;
		padding: 2rem 4rem;
		line-height: 7rem;
		font-size: 120px;
	}
</style>
