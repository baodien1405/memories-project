import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";
import moment from "moment";

const Post = (props) => {
  const { post } = props;
  console.log(post);
  const classes = useStyles();

  return <img src={post.selectedFile} alt="" srcset="" />;
};

export default Post;
