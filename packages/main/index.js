import getPost from '@lerna-example-repo/common';

export default async function getPosts(arr) {
  return await Promise.all(arr.map(async (id) => await getPost(id)));
}
