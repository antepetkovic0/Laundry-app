import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";

import { RULES } from "../constants/rules";
import PrivateRoute from "../components/shared/utilities/PrivateRoute/PrivateRoute";
import Shops from "../components/Shops/Shops";
import CreateShop from "../components/Shops/CreateShop";

const SHOP_ROUTES = [
  {
    path: "",
    rule: RULES.READ_SHOPS,
    component: Shops,
    exact: true,
  },
  {
    path: "/create",
    rule: RULES.CREATE_SHOPS,
    component: CreateShop,
    exact: false,
  },
  // {
  //   path: "/edit",
  //   rule: RULES.EDIT_SHOPS,
  //   component:,
  //   exact: false,
  // },
  // {
  //   path: "/:slug",
  //   rule: RULES.READ_SHOPS,
  //   component: ProductRoutes,
  //   exact: false,
  // },
];

const ShopsRoutes = ({ match }) => (
  <Switch>
    {SHOP_ROUTES.map((route) => (
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

ShopsRoutes.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default ShopsRoutes;
