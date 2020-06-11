import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Materials from "./pages/Materials";
import SignIn from "./pages/SignIn";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/materials" exact component={Materials} />
      </Switch>
    </BrowserRouter>
  );
}
