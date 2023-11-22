<script>
	import { unescape } from 'html-escaper';

	export let heading = undefined;
	export let bgColor = '04d704';
	export let textColor = '000000';
</script>

{#if heading}
	<div style={`background: #${bgColor};`} class="combo">
		<p class="big-text" style={`color: #${textColor};`}>
			{unescape(heading)}
		</p>
		<p class="footer">Tommy Palmer is a web developer in London</p>
	</div>
{:else}
	<div class="big-text" style={`background: #${bgColor};`}>
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

	.combo {
		justify-content: flex-start;
		padding-top: 2rem;
	}

	p {
		margin: 0;
	}

	.big-text {
		font-size: 4rem;
		line-height: 7rem;
		font-size: 120px;
		padding: 0 4rem;
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
