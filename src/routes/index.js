import React from "react";
import Route from "./Route";
import { Switch } from "react-router";

import SignIn from "../pages/SignIn";
import Materials from "../pages/Materials";
import Suppliers from "../pages/Suppliers";
import Customers from "../pages/Customers";
import Dashboard from "../pages/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/materials" component={Materials} isPrivate />
      <Route path="/suppliers" component={Suppliers} isPrivate />
      <Route path="/customers" component={Customers} isPrivate />
    </Switch>
  );
}
