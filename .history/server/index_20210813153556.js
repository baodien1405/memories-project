import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello to Memories API");
});

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
  app.listen(port, (error) => {
    if (error) throw error;
    console.log("Server running on port " + port);
  });
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
