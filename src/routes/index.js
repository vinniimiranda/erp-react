import React from "react";
import Route from "./Route";
import { Switch } from "react-router";
import SignIn from "../pages/SignIn";
import Materials from "../pages/Materials";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/materials" component={Materials} isPrivate />
    </Switch>
  );
}
