import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { dashboardRoutes } from "./routes";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";

const DashboardRoutes = ({ basePath }) => (
  <DashboardLayout>
    <Switch>
      {dashboardRoutes.map((route) => {
        const routePath = route.path ? `${basePath}/${route.path}` : basePath;

        return (
          <PrivateRoute
            key={routePath}
            path={routePath}
            component={route.component}
            rule={route.rule}
            exact={route.exact}
          />
        );
      })}
    </Switch>
  </DashboardLayout>
);

DashboardRoutes.propTypes = {
  basePath: PropTypes.string.isRequired,
};

export default DashboardRoutes;
