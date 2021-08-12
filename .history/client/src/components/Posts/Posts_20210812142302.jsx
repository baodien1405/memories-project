import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

const postTest = {
  createdAt: "2021-08-11T12:57:50.199Z",
  creator: "baodien1405",
  likeCount: 0,
  message: "Had a lot of fun",
  selectedFile: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAA",
  tags: ["newyear,happynewyear"],
  title: "New Year's Eve 2021",
  __v: 0,
};

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
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
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
