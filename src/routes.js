import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Materials from './pages/Materials';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Materials} />
      </Switch>
    </BrowserRouter>
  );
}
