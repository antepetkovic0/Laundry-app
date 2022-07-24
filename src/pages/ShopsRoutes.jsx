import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { rules } from "../utils/permissions";
import PrivateRoute from "../components/shared/utilities/PrivateRoute/PrivateRoute";
import Shops from "../components/Shops/Shops";
import CreateShop from "../components/Shops/CreateShop";
import SpecificShop from "../components/Shops/SpecificShop";
import EditShop from "../components/Shops/EditShop";
import ProductRoutes from "./ProductRoutes";

export const shopRoutes = [
  {
    path: "",
    rule: rules.READ_SHOP,
    component: Shops,
    exact: true,
  },
  {
    path: "create",
    rule: rules.CREATE_SHOP,
    component: CreateShop,
    exact: false,
  },
  {
    path: "edit",
    rule: rules.EDIT_SHOP,
    component: EditShop,
    exact: false,
  },
  // {
  //   path: ":slug",
  //   rule: rules.READ_SHOP,
  //   component: ProductRoutes,
  //   exact: false,
  // },
];

const ShopsRoutes = ({ match }) => (
  <Switch>
    {shopRoutes.map((route) => {
      const routePath = route.path ? `${match.path}/${route.path}` : match.path;

      return (
        <PrivateRoute
          key={route.path}
          path={routePath}
          component={route.component}
          rule={route.rule}
          exact={route.exact}
        />
      );
    })}
  </Switch>
);

ShopsRoutes.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default ShopsRoutes;
