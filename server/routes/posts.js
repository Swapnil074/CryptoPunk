//For all the routes

import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router(); //creating a router

//localhost:5000/posts
router.get("/", getPosts); //get request
router.post("/", createPost); //post request
router.get("/", getPosts); //get request

export default router; //exporting the router
