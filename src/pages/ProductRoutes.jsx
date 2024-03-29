import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";

import { RULES } from "../constants/rules";
import PrivateRoute from "../components/shared/utilities/PrivateRoute/PrivateRoute";
import SpecificShop from "../components/features/shops/SpecificShop";
import CreateProduct from "../components/features/products/CreateProduct";
import EditProduct from "../components/features/products/EditProduct";
import SpecificProduct from "../components/features/products/SpecificProduct";

export const PRODUCT_ROUTES = [
  {
    path: "",
    rule: RULES.READ_SHOPS,
    component: SpecificShop,
    exact: true,
  },
  {
    path: "/create",
    rule: RULES.CREATE_PRODUCTS,
    component: CreateProduct,
    exact: false,
  },
  {
    path: "/edit",
    rule: RULES.EDIT_PRODUCTS,
    component: EditProduct,
    exact: false,
  },
  {
    path: "/:productSlug",
    rule: RULES.READ_PRODUCTS,
    component: SpecificProduct,
    exact: false,
  },
];

const ProductRoutes = ({ match }) => (
  <Switch>
    {PRODUCT_ROUTES.map((route) => (
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

ProductRoutes.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default ProductRoutes;
