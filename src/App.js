import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import NotFound from "./pages/NotFound/NotFound";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/dashboard">{/* dashboard component */}</Route>
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
