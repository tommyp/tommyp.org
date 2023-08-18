<script>
	import Head from '$lib/components/Head.svelte';
	import MastHeader from '$lib/components/MastHeader.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
</script>

<Head heading="Uses" />

<MastHeader title="Things I Use" --titleColor="#fff" --bgColor="var(--highlight)" />
<Wrapper>
	<section>
		<article>
			<p>Here&#39;s a collection of some various things that I use on a day to day basis.</p>
			<h2 id="software">Software</h2>
			<ul>
				<li>
					<a href="https://apps.apple.com/us/app/amphetamine/id937984704?mt=12">Amphetatmine</a> - stops
					your Mac from going to sleep
				</li>
				<li><a href="https://arc.net/">Arc</a> - the best web browser</li>
				<li>
					<a href="https://duckduckgo.com/">DuckDuckGo</a> - the best search, once you get used to it
				</li>
				<li><a href="https://iterm2.com/">iTerm2</a> - a better Terminal</li>
				<li><a href="https://www.reederapp.com/">Reeder</a> - my RSS reader of choice</li>
				<li>
					<a href="https://www.raycast.com/">Raycast</a> - I&#39;ve used many App Launchers over the
					years and this is my current favourite
				</li>
				<li>
					<a href="https://secrets.app/">Secrets</a> - a lovely macOS and iOS app combo for password
					management
				</li>
				<li><a href="https://culturedcode.com/things/">Things</a> - the macOS GTD OG</li>
				<li>
					<a
						href="https://www.native-instruments.com/en/products/traktor/dj-software/traktor-pro-3/"
						>Traktor</a
					>
					- I learnt to DJ with Traktor and it&#39;s still my go to DJ setup for when I play as
					<a href="https://soundcloud.com/syntax-terrorist">Syntax Terror</a>
				</li>
			</ul>
			<h2 id="hardware">Hardware</h2>
			<ul>
				<li>MacBook Pro 14&quot; M1 Pro</li>
				<li>iPhone 12</li>
				<li>ZSA Moonlander</li>
				<li>Logitech MX Vertical Ergonomic Mouse</li>
				<li>Pioneer DJ speakers</li>
				<li>Huawei 34&quot; Curved Monitor</li>
			</ul>
		</article>
	</section>
</Wrapper>

<style>
	section {
		padding-top: 1rem;
		color: var(--near-black);
	}
	.img {
		grid-column-start: 8;
		grid-column-end: 13;
		color: var(--near-black);
		font-style: italic;
	}

	img {
		width: 100%;
	}

	a {
		color: var(--near-black);
		text-decoration-color: var(--neon-green);
	}

	a:hover {
		color: var(--neon-green);
	}

	@media (min-width: 968px) {
		section {
			padding: 2rem;
			font-size: 1.75rem;
			line-height: 1.5;
			width: 100%;
			max-width: 60rem;
		}

		h2 {
			margin-top: 1.5rem;
		}
	}
</style>
