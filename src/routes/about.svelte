<script>
	import Main from '$lib/layout/Main.svelte';
	import { fly } from 'svelte/transition';
	import Paragraph from '$lib/components/Paragraph.svelte';
</script>

<div in:fly={{ delay: 250, duration: 250, x: -100 }} out:fly={{ delay: 0, duration: 250, x: -100 }}>
	<Main>
		<article>
			<Paragraph>
				I've worked on big teams like <a href="https://deliveroo.co.uk/" class="deliveroo">
					Deliveroo</a
				>
				and
				<a href="https://www.gov.uk/" class="gov">GOV.UK</a>, and small teams like
				<a href="https://www.goodclub.co.uk/" class="goodclub"> Good Club</a>. I've also worked on
				projects by myself, like
				<a class="shipwreck" href="https://shipwreck.tommyp.org/">Conversations With A Shipwreck</a>
				and
				<a class="govbins" href="https://govbins.uk/">Govbins</a>.
			</Paragraph>
			<Paragraph>I can work with JavaScript, Ruby, Elixir and many other technologies.</Paragraph>
			<Paragraph
				>I'm originally from Belfast, but I've lived in London since 2013. My first gig was Daft
				Punk. I have a <a href="https://www.thedesignersrepublic.com/">TDR</a>
				<a href="https://www.instagram.com/p/BRLqKPiA3UwTwP9Gi4KvBLMrBq8Kwkb7SHBU7g0/">tattoo</a>.
				I've seen <a href="https://www.youtube.com/watch?v=tfMTHIwTUXA">The Room</a> about 100 times.
			</Paragraph>

			<Paragraph>
				<a class="btn" href="mailto:hi@tommyp.org">email</a> /
				<a href="/files/tommy-palmer-cv.pdf">CV</a> /
				<a href="http://twitter.com/tommypalmr">Twitter</a> /
				<a href="https://github.com/tommyp/">Github</a>
			</Paragraph>
		</article>
	</Main>
</div>

<style>
	p {
		margin: 0;
		margin-bottom: 3rem;
	}

	a {
		color: var(--highlight);
		text-decoration: none;
		transition: color 0.5s, background 0.5s;
	}

	a:hover {
		color: var(--foreground);
		background: var(--highlight);
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
