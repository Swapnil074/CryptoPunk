import axios from "axios"; //axios is a promise based HTTP client for the browser and node.js

const url = "https://memoriesclone.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);

export const createPost = (newpost) => axios.post(url, newpost);
export const updatePost = (id, postData) =>
  axios.patch(`${url}/${id}`, postData);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
