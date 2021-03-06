import { Container } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

const App = (props) => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
      <Home />
    </Container>
  );
};

export default App;
