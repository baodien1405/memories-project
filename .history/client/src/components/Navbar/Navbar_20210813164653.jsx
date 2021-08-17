import { AppBar, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles.js";
import memories from "./../../assets/images/memories.png";

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">
        Memories
      </Typography>
      <img
        className={classes.image}
        src={memories}
        alt="memories"
        height="60"
      />
    </AppBar>
  );
};

export default Navbar;
