<script lang="ts">
	interface Post {
		title: string;
		date: string;
		content: string;
	}
	export let data: Post;
</script>

<article>
	<h1>{data.title}</h1>

	<p>Published: {data.date}</p>

	<svelte:component this={data.content} />
</article>
