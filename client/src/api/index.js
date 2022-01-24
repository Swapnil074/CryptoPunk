import axios from "axios"; //axios is a promise based HTTP client for the browser and node.js

const url = "http://localhost:5000/posts";

export const fetchPosts = async () => {
  axios.get(url).then((res) => console.log(res.data));
};
