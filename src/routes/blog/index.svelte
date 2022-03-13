<script>
	import Main from '$lib/layout/Main.svelte';
	import { fly } from 'svelte/transition';

	const posts = [
		{
			href: '/blog/buying-a-house',
			title: 'I bought a house',
			description: '3rd January 2021'
		},
		{
			href: '/blog/lets-make-mad-shit',
			title: 'Lets make mad shit',
			description: '3rd January 2021'
		}
	];
</script>

<div in:fly={{ delay: 250, duration: 250, x: -100 }} out:fly={{ delay: 0, duration: 250, x: -100 }}>
	<Main>
		<div>
			{#each posts as post}
				<article class="list__item">
					<a href={post.href}>
						<h3>{post.title}</h3>
						<h4>{post.description}</h4>
					</a>
				</article>
			{/each}
		</div>
	</Main>
</div>
