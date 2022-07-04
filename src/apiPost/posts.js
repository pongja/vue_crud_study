import axios from 'axios';

export function getPosts(params) {
  return axios.get('http://localhost:5000/posts', { params }); //객체전달
}
export function getPostByID(id) {
  return axios.get(`http://localhost:5000/posts/${id}`);
}
export function createPost(data) {
  return axios.post('http://localhost:5000/posts', data);
}
export function updataPost(id, data) {
  return axios.put(`http://localhost:5000/posts/${id}`, data);
}
export function deletePost(id) {
  return axios.delete(`http://localhost:5000/posts/${id}`);
}
