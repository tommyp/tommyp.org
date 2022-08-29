<script lang="ts">
	import type { Post, PostSummary } from '$lib/types';
	export let data: { posts: Array<PostSummary> };
</script>

<h1>Blog</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h2><a href={post.path}>{post.meta.title}</a></h2>
		</li>
	{/each}
</ul>
