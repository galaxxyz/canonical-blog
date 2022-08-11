const baseURL =
  'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';

const fetchPosts = async () => {
  const response = await fetch(baseURL);
  const data = await response.json();
  return data;
};

const api = { fetchPosts };

export default api;
