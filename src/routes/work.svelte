<script>
	import Main from '../layout/Main.svelte';
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ delay: 250, duration: 250, x: -100 }} out:fly={{ delay: 0, duration: 250, x: -100 }}>
	<Main>
		<article>
			<p>
				I've worked on big teams like <a href="https://deliveroo.co.uk/" class="deliveroo">
					Deliveroo</a
				>
				and
				<a href="https://www.gov.uk/" class="gov">GOV.UK</a>, and small teams like
				<a href="https://www.goodclub.co.uk/" class="goodclub"> Good Club</a>. I've also worked on
				smaller projects like
				<a class="shipwreck" href="https://shipwreck.tommyp.org/">Conversations With A Shipwreck</a>
				and
				<a class="govbins" href="https://govbins.uk/">Govbins</a>.
			</p>
			<p>I can work with JavaScript, Ruby, Elixir and many other technologies.</p>
		</article>
	</Main>
</div>

<style>
	p {
		margin: 0;
		margin-bottom: 3rem;
	}

	a {
		text-decoration: none;
		transition: color 0.5s, background 0.5s;
	}

	a:hover {
		color: var(--background);
	}

	.deliveroo {
		color: #00ccbb;
	}

	.deliveroo:hover {
		background: #00ccbb;
	}

	.gov {
		color: #1d70b8;
	}

	.gov:hover {
		background: #1d70b8;
	}

	.goodclub {
		color: #0db98c;
	}

	.goodclub:hover {
		background: #0db98c;
	}

	.shipwreck {
		color: #c5b358;
	}

	.shipwreck:hover {
		background: #c5b358;
	}

	.govbins {
		color: #ea47cb;
	}

	.govbins:hover {
		background: #ea47cb;
	}

	@media screen and (max-width: 768px) {
		p {
			margin-bottom: 1rem;
		}
	}
</style>
