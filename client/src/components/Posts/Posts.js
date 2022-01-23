import React from "react";
import Post from "./Post/Post.js";
import useStyles from "./styles.js";

export default function Posts() {
  const classes = useStyles();
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
}
