import { Container } from "@material-ui/core";
import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

const App = (props) => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Home />
    </Container>
  );
};

export default App;
