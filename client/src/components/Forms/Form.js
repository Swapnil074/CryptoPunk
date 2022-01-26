import React, { useState } from "react";
import useStyles from "./styles.js";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64"; //FileBase is a react component that allows you to upload files to the server
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../actions/posts.js";

export default function Form() {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // to avoid refresh in the browser
    dispatch(createPost(postData)); // dispatch the action to the reducer to create the post
  };

  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={
            (e) => setPostData({ ...postData, creator: e.target.value }) //spread and add so that it will not override the previous value
          }
        />{" "}
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={
            (e) => setPostData({ ...postData, title: e.target.value }) //spread and add so that it will not override the previous value
          }
        />{" "}
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={
            (e) => setPostData({ ...postData, message: e.target.value }) //spread and add so that it will not override the previous value
          }
        />{" "}
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={
            (e) => setPostData({ ...postData, tags: e.target.value }) //spread and add so that it will not override the previous value
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          size="large"
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          size="small"
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}
