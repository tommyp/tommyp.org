import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, url }) => {
  const category = url.searchParams.get('category');

  const response = await fetch(`/api/posts?category=${category}`);
  const posts = await response.json();

  return {
    category,
    posts
  };
};
