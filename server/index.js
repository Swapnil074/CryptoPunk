import bodyParser from "body-parser"; // body-parser is a middleware that parses the request body and makes it available on req.body
import express from "express"; // express is a framework for node.js
import mongoose from "mongoose"; // MongoDB object modeling tool designed to work in an asynchronous environment
import cors from "cors"; // node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options

import postsRouter from "./routes/posts.js"; // importing the postsRouter

const app = express(); // creating an express app

//setting bodyparsers so that we can easily send our requests
app.use(bodyParser.json({ limit: "30mb", extended: "true" })); //limit size of json
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" })); //limit size of url
app.use(cors());

app.use("/posts", postsRouter); // using the postsRouter

const CONNECTION_URL =
  "mongodb+srv://Swapnil:CryptoPunk_2301@cluster0.uasnq.mongodb.net/CRYPTOPUNK?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000; //setting port

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) //connecting to the database
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  ) //listening to the port
  .catch((err) => console.log(err)); //if there is an error in connecting to the database
