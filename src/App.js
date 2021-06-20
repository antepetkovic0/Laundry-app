import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">{/* login component */}</Route>
      <Route path="/dashboard">{/* dashboard component */}</Route>
    </Switch>
  </Router>
);

export default App;
