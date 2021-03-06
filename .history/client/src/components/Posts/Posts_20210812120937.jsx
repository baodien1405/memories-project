import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const classes = useStyles();
  // return !posts.length ? (
  //   <CircularProgress />
  // ) : (
  //   <Grid
  //     className={classes.mainContainer}
  //     container
  //     alignItems="stretch"
  //     spacing={3}
  //   >
  //     {posts.map((post) => (
  //       <Grid item key={post._id} xs={12} sm={6}>
  //         <Post post={post} />
  //       </Grid>
  //     ))}
  //   </Grid>
  // );
  return <div>{posts}</div>;
};

export default Posts;
