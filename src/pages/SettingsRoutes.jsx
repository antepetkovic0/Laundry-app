import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";

import { RULES } from "../constants/rules";
import PrivateRoute from "../components/shared/utilities/PrivateRoute/PrivateRoute";
import Settings from "../components/features/settings/Settings";
import SettingsLanguage from "../components/features/settings/SettingsLanguage/SettingsLanguage";

const SETTINGS_ROUTES = [
  {
    path: "",
    rule: RULES.MANAGE_APP,
    component: Settings,
    exact: true,
  },
  // {
  //   path: "/account",
  //   rule: RULES.MANAGE_APP,
  //   component: CreateProduct,
  //   exact: false,
  // },
  // {
  // {
  //   path: "/security",
  //   rule: RULES.MANAGE_APP,
  //   component: SpecificProduct,
  //   exact: false,
  // },
  //   path: "/notifications",
  //   rule: RULES.MANAGE_APP,
  //   component: EditProduct,
  //   exact: false,
  // },
  {
    path: "/language",
    rule: RULES.MANAGE_APP,
    component: SettingsLanguage,
    exact: false,
  },
  // {
  //   path: "/logout",
  //   rule: RULES.MANAGE_APP,
  //   component: SpecificProduct,
  //   exact: false,
  // },
];

const SettingsRoutes = ({ match }) => (
  <Switch>
    {SETTINGS_ROUTES.map((route) => (
      <PrivateRoute
        key={route.path}
        path={`${match.path}${route.path}`}
        component={route.component}
        rule={route.rule}
        exact={route.exact}
      />
    ))}
  </Switch>
);

SettingsRoutes.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default SettingsRoutes;
