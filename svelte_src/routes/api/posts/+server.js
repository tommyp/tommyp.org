import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async ({ url }) => {
  const category = url.searchParams.get('category');

  const allPosts = await fetchMarkdownPosts();

  let sortedPosts = allPosts
    .sort((a, b) => {
      return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    })
    .filter((post) => !post.meta.draft);

  // if (category !== 'null') {
  //   sortedPosts = sortedPosts.filter((post) => post.meta.categories.includes(category));
  // }

  // console.log(category, sortedPosts)

  return json(sortedPosts);
};
