<script>
	export let heading = undefined;
	export let color = '#04d704';
</script>

{#if heading}
	<div style={`background: ${color};`} class="combo">
		<p class="big-text">
			{heading}
		</p>
		<p class="footer">Tommy Palmer is a web developer in London</p>
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
		align-items: flex-start;
		justify-content: center;
		margin: 0;
		padding: 0;
	}

	p {
		margin: 0;
	}

	.big-text {
		font-size: 4rem;
		line-height: 7rem;
		font-size: 120px;
		padding: 2rem 4rem;
	}

	.footer {
		background: #04d704;
		width: 100%;
		padding: 2rem 4rem;
		font-size: 45px;
		position: absolute;
		bottom: 0;
	}
</style>
