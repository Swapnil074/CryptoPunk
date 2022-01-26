import React from "react";
import { useSelector } from "react-redux"; //useSelector is a hook that allows us to access the state
import Post from "./Post/Post.js";
import useStyles from "./styles.js";
import { Grid, CircularProgress } from "@material-ui/core";

export default function Posts({ setCurrentId }) {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts); //created a variable called posts and assigned it to the global state

  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}
