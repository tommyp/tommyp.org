<script>
	import Main from '../layout/Main.svelte';
	import { fly } from 'svelte/transition';
	import Marquee from '../components/Marquee.svelte';

	const projects = [
		{
			href: '/work/govbins',
			title: 'Govbins',
			description: 'Cataloging the nations bins'
		},
		{
			href: '/work/shipwreck',
			title: 'Conversations with a shipwreck',
			description: 'A digital exhibition'
		},
		{
			href: '/work/shorts-weather',
			title: 'Is It Shorts Weather Today?',
			description: 'Telling you if you should bare your legs today'
		}
	];

	const posts = [];
</script>

<div in:fly={{ delay: 250, duration: 250, x: -100 }} out:fly={{ delay: 0, duration: 250, x: -100 }}>
	<Main>
		<section class="hero">
			<header>
				<h1>
					I'm a freelance web developer living in London currently seeking freelance opportunities
				</h1>
			</header>

			<div class="photo" />
		</section>
		<Marquee />
		<section class="content">
			<section class="list">
				<h2>Projects</h2>
				{#each projects as project}
					<article class="list__item">
						<a href={project.href}>
							<h3>{project.title}</h3>
							<h4>{project.description}</h4>
						</a>
					</article>
				{/each}
			</section>
			<section class="list">
				<h2>Writing</h2>
				{#each posts as post}
					<article class="list__item">
						<a href={post.href}>
							<h3>{post.title}</h3>
							<h4>{post.description}</h4>
						</a>
					</article>
				{/each}
			</section>
		</section>
	</Main>
</div>

<style>
	.hero {
		display: flex;
		height: auto;
		gap: 4rem;
		width: 100%;
	}
	header {
		border: 3px solid var(--highlight);
		color: var(--foreground);
		padding: 1rem;
		flex-grow: 1;
	}

	h1 {
		margin: 0;
		font-size: 3rem;
	}

	h2 {
		font-size: 3rem;
	}

	.photo {
		border: 3px solid var(--highlight);
		background-image: url(/images/wall.jpg);
		background-color: var(--highlight);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-blend-mode: difference;

		aspect-ratio: 1;
		min-width: 350px;

		max-height: 450px;
	}

	.content {
		display: flex;
		gap: 4rem;
	}

	.list {
		border: 3px solid var(--highlight);
		width: 50%;
		padding: 1rem;
		display: flex;
		flex-direction: column;
	}

	.list a {
		padding: 1rem 0;
		color: var(--highlight);
		text-decoration: none;
		display: block;
		transition: padding 0.3s, background-color 0.3s, color 0.3s;
	}

	.list a:hover {
		padding-left: 1rem;
		background-color: var(--highlight);
		color: var(--foreground);
	}

	.list h2 {
		margin-bottom: 1rem;
	}

	.list h3 {
		font-size: 2rem;
	}

	.list h4 {
		font-size: 1.5rem;
	}

	.list > .list__item {
		border-bottom: 3px solid var(--highlight);
	}

	.list > .list__item:last-child {
		border-bottom: none;
	}
</style>
