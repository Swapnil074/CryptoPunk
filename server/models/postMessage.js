import mongoose from "mongoose";

const postMessageSchema = mongoose.Schema({
  title: String,
  message: String,
  creater: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
}); //creating a new schema

const PostMessage = mongoose.model("PostMessage", postMessageSchema); //creating a new model

export default PostMessage; //exporting the model
