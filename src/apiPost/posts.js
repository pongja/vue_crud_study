import { posts } from '.';

export function getPosts(params) {
  return posts.get('', { params }); //객체전달
}
export function getPostByID(id) {
  return posts.get(id + '');
}
export function createPost(data) {
  return posts.post('', data);
}
export function updataPost(id, data) {
  return posts.put(id, data);
}
export function deletePost(id) {
  return posts.delete(`/${id}`);
}
