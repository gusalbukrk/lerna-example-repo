import node from 'isomorphic-fetch';

export default async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const json = await res.json();

  return json;
}