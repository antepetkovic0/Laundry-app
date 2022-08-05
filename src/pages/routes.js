// import Cart from "./Dashboard/components/Cart/Cart";
// import Orders from "./Dashboard/components/Orders/Orders";
// import Settings from "./Dashboard/components/Settings/Settings";
// import Users from "../components/Users/Users";

// import { permissionRules } from "../constants/permissions";
// import { dashboardRoutePath } from "../constants/routePaths";
// import ShopsRoutes from "./ShopsRoutes";
// import WithLoading from "../hocs/WithLoading";
// import {
//   FETCH_DASHBOARD_SHOPS,
//   FETCH_DASHBOARD_USERS,
// } from "../store/actions/dashboard";
// import DashboardView from "./dashboardd/Dashboard";
// import Shops from "../components/Shops/Shops";

// const DashboardWithLoading = WithLoading(
//   DashboardView,
//   FETCH_DASHBOARD_USERS,
//   FETCH_DASHBOARD_SHOPS
// );

// export const dashboardRoutes = [
//   {
//     path: dashboardRoutePath.OVERVIEW,
//     name: "Dashboard",
//     iconName: "dashboard",
//     component: DashboardWithLoading,
//     rule: permissionRules.MANAGE_DASHBOARD,
//     exact: true,
//   },
//   {
//     path: dashboardRoutePath.USERS,
//     name: "Users",
//     iconName: "groups",
//     component: Users,
//     rule: permissionRules.MANAGE_USER,
//     exact: false,
//   },
//   {
//     path: dashboardRoutePath.SHOPS,
//     name: "Shops",
//     iconName: "business",
//     component: Shops,
//     rule: permissionRules.READ_SHOP,
//     exact: false,
//   },
//   {
//     path: dashboardRoutePath.ORDERS,
//     name: "Orders",
//     iconName: "orders",
//     component: Orders,
//     rule: permissionRules.READ_ORDER,
//     exact: false,
//   },
//   {
//     path: dashboardRoutePath.CART,
//     name: "Cart",
//     iconName: "shopping_cart",
//     component: Cart,
//     rule: permissionRules.MANAGE_CART,
//     exact: false,
//   },
//   {
//     path: dashboardRoutePath.SETTINGS,
//     name: "Settings",
//     iconName: "settings",
//     component: Settings,
//     rule: permissionRules.MANAGE_DASHBOARD,
//     exact: false,
//   },
// ];
