import React from "react";
import Route from "./Route";
import { Switch } from "react-router";

import SignIn from "../pages/SignIn";
import Materials from "../pages/Materials";
import Suppliers from "../pages/Suppliers";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/materials" component={Materials} isPrivate />
      <Route path="/suppliers" component={Suppliers} isPrivate />
    </Switch>
  );
}
