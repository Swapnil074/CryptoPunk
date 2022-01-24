import React from "react";
import Post from "./Post/Post.js";
import useStyles from "./styles.js";
import { useSelector } from "react-redux"; //useSelector is a hook that allows us to access the state

export default function Posts() {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts); //created a variable called posts and assigned it to the global state
  console.log(posts);
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
}
