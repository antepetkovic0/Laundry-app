import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";

import { APP_ROUTES } from "../../constants/routes";
import AppLayout from "../../layouts/AppLayout";
import PrivateRoute from "../../components/shared/utilities/PrivateRoute/PrivateRoute";

const AppRoutes = ({ basePath }) => (
  <AppLayout>
    <Switch>
      {APP_ROUTES.map((route) => (
        <PrivateRoute
          key={route.path}
          path={`${basePath}${route.path}`}
          component={route.component}
          rule={route.rule}
          exact={route.exact}
        />
      ))}
    </Switch>
  </AppLayout>
);

AppRoutes.propTypes = {
  basePath: PropTypes.string.isRequired,
};

export default AppRoutes;
