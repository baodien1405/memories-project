import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import momories from "./assets/images/memories.png";

const App = (props) => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
        <img src={momories} alt="momories" height="60" />
      </AppBar>
    </Container>
  );
};

export default App;
