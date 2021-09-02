import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import RouteAuth from "./utils/routeAuth";

import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import DashAdmin from "./pages/Dashboard/Admin/DashAdmin";
import DashService from "./pages/Dashboard/Service/DashService";
import NotFound from "./pages/NotFound/NotFound";

import "./modal.css";

const App = () => (
  <Router>
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/auth" component={Auth} />
      <RouteAuth path="/dashboard/admin" Component={DashAdmin} roles={[1]} />
      <RouteAuth
        path="/dashboard/service"
        Component={DashService}
        roles={[2]}
      />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
