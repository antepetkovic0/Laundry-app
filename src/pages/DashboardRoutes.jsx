import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { dashboardRoutes } from "./routes";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";

const DashboardRoutes = ({ basePath }) => (
  <DashboardLayout>
    <Switch>
      {dashboardRoutes.map((route) => (
        <PrivateRoute
          key={route.path}
          path={`${basePath}/${route.path}`}
          component={route.component}
          rule={route.rule}
          exact
        />
      ))}
    </Switch>
  </DashboardLayout>
);

DashboardRoutes.propTypes = {
  basePath: PropTypes.string.isRequired,
};

export default DashboardRoutes;
