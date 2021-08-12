import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Posts = (props) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <>
      <h1>POSTS</h1>
      <Post />
    </>
  );
};

export default Posts;
