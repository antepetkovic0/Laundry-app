import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";

// eslint-disable-next-line import/no-cycle
import AppLayout from "../../layouts/AppLayout";
import { RULES } from "../../constants/rules";
import PrivateRoute from "../../components/shared/utilities/PrivateRoute/PrivateRoute";
import Dashboard from "../../components/features/dashboard/Dashboard";
import Users from "../../components/Users/Users";
import ShopsRoutes from "../ShopsRoutes";
import Orders from "../../components/features/orders/Orders";
import Cart from "../../components/features/cart/Cart";
import SettingsRoutes from "../SettingsRoutes";

export const APP_ROUTES = [
  {
    path: "",
    name: "Dashboard",
    iconName: "dashboard",
    component: Dashboard,
    rule: RULES.MANAGE_APP,
    exact: true,
  },
  {
    path: "/users",
    name: "Users",
    iconName: "groups",
    component: Users,
    rule: RULES.MANAGE_USERS,
    exact: false,
  },
  {
    path: "/shops",
    name: "Shops",
    iconName: "business",
    component: ShopsRoutes,
    rule: RULES.READ_SHOPS,
    exact: false,
  },
  {
    path: "/orders",
    name: "Orders",
    iconName: "orders",
    component: Orders,
    rule: RULES.READ_ORDERS,
    exact: false,
  },
  {
    path: "/cart",
    name: "Cart",
    iconName: "shopping_cart",
    component: Cart,
    rule: RULES.MANAGE_CART,
    exact: false,
  },
  {
    path: "/settings",
    name: "Settings",
    iconName: "settings",
    component: SettingsRoutes,
    rule: RULES.MANAGE_APP,
    exact: false,
  },
];

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
