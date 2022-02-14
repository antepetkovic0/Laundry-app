import Cart from "./Dashboard/components/Cart/Cart";
import Orders from "./Dashboard/components/Orders/Orders";
import Overview from "./Dashboard/components/Overview/Overview";
import Pending from "./Dashboard/components/Pending/Pending";
import Settings from "./Dashboard/components/Settings/Settings";
import Users from "./Dashboard/components/Users/Users";

import AllShops from "../components/dashboard/Shops/AllShops";
import SpecificShop from "../components/dashboard/Shops/SpecificShop";
import Create from "../components/dashboard/Shops/Create";

import { permissionRules } from "../constants/permissions";
import { dashboardRoutePath } from "../constants/routePaths";
import { rules } from "../utils/permissions";
import ShopsRoutes from "./ShopsRoutes";

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
    component: ShopsRoutes,
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
