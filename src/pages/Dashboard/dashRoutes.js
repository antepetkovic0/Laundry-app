import { checkPermission, rules } from "../../utils/permissions";

import Overview from "./components/Overview/Overview";
import Users from "./components/Users/Users";
import Pending from "./components/Pending/Pending";
import Shops from "./components/Shops/Shops";
import Orders from "./components/Orders/Orders";
import Cart from "./components/Cart/Cart";
import Settings from "./components/Settings/Settings";
import Logout from "./components/Logout";

export const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    iconName: "dashboard",
    component: Overview,
    exact: true,
    rule: rules.MANAGE_DASHBOARD,
  },
  {
    path: "/dashboard/users",
    name: "Users",
    iconName: "groups",
    component: Users,
    exact: false,
    rule: rules.MANAGE_USER,
  },
  {
    path: "/dashboard/shops",
    name: "Shops",
    iconName: "business",
    component: Shops,
    exact: false,
    rule: rules.READ_SHOP,
  },
  {
    path: "/dashboard/pending",
    name: "Pending Registrations",
    iconName: "pending_actions",
    component: Pending,
    exact: false,
    rule: rules.MANAGE_USER,
  },
  {
    path: "/dashboard/orders",
    name: "Orders",
    iconName: "orders",
    component: Orders,
    exact: false,
    rule: rules.READ_ORDER,
  },
  {
    path: "/dashboard/cart",
    name: "Cart",
    iconName: "shopping_cart",
    component: Cart,
    exact: false,
    rule: rules.MANAGE_CART,
  },
  {
    path: "/dashboard/settings",
    name: "Settings",
    iconName: "settings",
    component: Settings,
    exact: false,
    rule: rules.MANAGE_DASHBOARD,
  },
  {
    path: "/dashboard/logout",
    name: "Logout",
    iconName: "logout",
    component: Logout,
    exact: false,
    rule: rules.MANAGE_DASHBOARD,
  },
];

export const dashboardMenu = (userPermissions) => {
  const routesPermissionCheck = dashboardRoutes.map((route) => ({
    ...route,
    hasPermission: checkPermission(route.rule, userPermissions),
  }));
  return routesPermissionCheck.filter((item) => item.hasPermission);
};
