import Cart from "../pages/Dashboard/components/Cart/Cart";
import Orders from "../pages/Dashboard/components/Orders/Orders";
import Overview from "../pages/Dashboard/components/Overview/Overview";
import Pending from "../pages/Dashboard/components/Pending/Pending";
import Settings from "../pages/Dashboard/components/Settings/Settings";
import Shops from "../pages/Dashboard/components/Shops/Shops";
import Users from "../pages/Dashboard/components/Users/Users";

import { permissionRules } from "./permissions";

export const dashboardRoutePath = {
  OVERVIEW: "overview",
  USERS: "users",
  SHOPS: "shops",
  PENDING_REGISTRATIONS: "pending-registrations",
  ORDERS: "orders",
  CART: "cart",
  SETTINGS: "settings",
};

export const dashboardRoutes = [
  {
    path: dashboardRoutePath.OVERVIEW,
    name: "Dashboard",
    iconName: "dashboard",
    component: Overview,
    rule: permissionRules.MANAGE_DASHBOARD,
  },
  {
    path: dashboardRoutePath.USERS,
    name: "Users",
    iconName: "groups",
    component: Users,
    rule: permissionRules.MANAGE_USER,
  },
  {
    path: dashboardRoutePath.SHOPS,
    name: "Shops",
    iconName: "business",
    component: Shops,
    rule: permissionRules.READ_SHOP,
  },
  {
    path: dashboardRoutePath.PENDING_REGISTRATIONS,
    name: "Pending Registrations",
    iconName: "pending_actions",
    component: Pending,
    rule: permissionRules.MANAGE_USER,
  },
  {
    path: dashboardRoutePath.ORDERS,
    name: "Orders",
    iconName: "orders",
    component: Orders,
    rule: permissionRules.READ_ORDER,
  },
  {
    path: dashboardRoutePath.CART,
    name: "Cart",
    iconName: "shopping_cart",
    component: Cart,
    rule: permissionRules.MANAGE_CART,
  },
  {
    path: dashboardRoutePath.SETTINGS,
    name: "Settings",
    iconName: "settings",
    component: Settings,
    rule: permissionRules.MANAGE_DASHBOARD,
  },
];
