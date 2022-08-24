import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { rules } from "../utils/permissions";
import PrivateRoute from "../components/shared/utilities/PrivateRoute/PrivateRoute";
import SpecificShop from "../components/features/shops/SpecificShop";
import CreateProduct from "../components/Products/CreateProduct";
import EditProduct from "../components/Products/EditProduct";
import { RULES } from "../constants/rules";
// import SpecificProduct from "../components/Products/SpecificProduct";

export const PRODUCT_ROUTES = [
  {
    path: "",
    rule: RULES.READ_SHOPS,
    component: SpecificShop,
    exact: true,
  },
  {
    path: "create",
    rule: RULES.CREATE_PRODUCTS,
    component: CreateProduct,
    exact: false,
  },
  {
    path: "edit/:slug",
    rule: RULES.EDIT_PRODUCTS,
    component: EditProduct,
    exact: false,
  },
  // {
  //   path: ":productSlug",
  //   rule: rules.READ_PRODUCT,
  //   component: SpecificProduct,
  //   exact: false,
  // },
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
