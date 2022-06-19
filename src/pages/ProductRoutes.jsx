import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { rules } from "../utils/permissions";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import CreateProduct from "../components/Products/CreateProduct";
import SpecificShop from "../components/Shops/SpecificShop";

export const productRoutes = [
  {
    path: "",
    rule: rules.READ_SHOP,
    component: SpecificShop,
    exact: true,
  },
  {
    path: "create",
    rule: rules.CREATE_PRODUCT,
    component: CreateProduct,
    exact: false,
  },
];

const ProductRoutes = ({ match }) => {
  console.log(match);
  return (
    <Switch>
      {productRoutes.map((route) => {
        const routePath = route.path
          ? `${match.path}/${route.path}`
          : match.path;

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
};

ProductRoutes.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default ProductRoutes;