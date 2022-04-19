import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { rules } from "../utils/permissions";
import { FETCH_SHOPS, FETCH_SPECIFIC_SHOP } from "../store/actions/shops";
import WithLoading from "../hocs/WithLoading";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Shops from "../containers/Shops/Shops";
import SpecificShop from "../containers/SpecificShop/SpecificShop";
import CreateShop from "../containers/CreateShop/CreateShop";

const ShopsWithLoading = WithLoading(Shops, FETCH_SHOPS);
const SpecificShopWithLoading = WithLoading(SpecificShop, FETCH_SPECIFIC_SHOP);

export const shopRoutes = [
  {
    path: "",
    rule: rules.READ_SHOP,
    component: ShopsWithLoading,
    exact: true,
  },
  {
    path: "create",
    rule: rules.CREATE_SHOP,
    component: CreateShop,
    exact: false,
  },
  {
    path: ":slug",
    rule: rules.READ_SHOP,
    component: SpecificShopWithLoading,
    exact: false,
  },
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
