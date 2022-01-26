//For all the handlers
//extracted functionality from the route to make it a pure function
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const PostMessages = await PostMessage.find(); //finding all the posts
    res.status(200).json(PostMessages); //sending the response
  } catch (error) {
    res.status(404).json({ message: error.message }); //
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.types.objecId.isValid(_id))
    return res.status(400).json({ message: "invalid id" });

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.json(updatedPost);
};
