import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NotAuthorized from "./pages/Error/NotAuthorized";
import NotFound from "./pages/Error/NotFound";

import DashboardRoutes from "./pages/DashboardRoutes";

import "./scss/main.scss";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/shared/utilities/PrivateRoute/PrivateRoute";
import SpecificShop from "./components/Shops/SpecificShop";
import { rules } from "./utils/permissions";
import SpecificProduct from "./components/Products/SpecificProduct";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";

const App = () => (
  <Router>
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/auth"
        render={({ match }) => <Auth basePath={match.path} />}
      />
      <Route
        path="/dashboard"
        render={({ match }) => <DashboardRoutes basePath={match.path} />}
      />
      <PrivateRoute
        // key={route.path}
        path="/dashboard/shops/:slug"
        component={SpecificShop}
        exact
        rule={rules.READ_SHOP}
      />
      <PrivateRoute
        // key={route.path}
        path="/dashboard/shops/:slug/:productSlug"
        component={SpecificProduct}
        exact
        rule={rules.READ_PRODUCT}
      />

      <Route path="/unauthorized" component={NotAuthorized} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
