import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AllShops from "../components/dashboard/Shops/AllShops";
import Create from "../components/dashboard/Shops/Create";
import SpecificShop from "../components/dashboard/Shops/SpecificShop";
import { rules } from "../utils/permissions";

export const shopRoutes = [
  {
    path: "",
    rule: rules.READ_SHOP,
    component: AllShops,
    exact: true,
  },
  {
    path: "create",
    rule: rules.CREATE_SHOP,
    component: Create,
    exact: false,
  },
  {
    path: ":slug",
    rule: rules.READ_SHOP,
    component: SpecificShop,
    exact: false,
  },
];

const ShopsRoutes = ({ match }) => (
  <Switch>
    {shopRoutes.map((route) => (
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
