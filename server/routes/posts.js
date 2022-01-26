//For all the routes

import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router(); //creating a router

//localhost:5000/posts
router.post("/", createPost); //post request
router.get("/", getPosts); //get request
router.patch("/:id", updatePost); //patch request
router.delete("/:id", deletePost); //delete request
router.patch("/:id/likePost", likePost); //delete request

export default router; //exporting the router
