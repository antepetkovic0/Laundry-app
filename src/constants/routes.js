import Dashboard from "../components/features/dashboard/Dashboard";
import Users from "../components/Users/Users";
import { RULES } from "./rules";

// export const SETTING_ROUTES = [
//   {
//     path: "",
//     rule: RULES.READ_SHOP,
//     component: SpecificShop,
//     exact: true,
//   },
//   {
//     path: "/create",
//     rule: RULES.CREATE_PRODUCT,
//     component: CreateProduct,
//     exact: false,
//   },
//   {
//     path: "/edit",
//     rule: RULES.EDIT_PRODUCT,
//     component: EditProduct,
//     exact: false,
//   },
//   {
//     path: "/:slug",
//     rule: RULES.READ_PRODUCT,
//     component: SpecificProduct,
//     exact: false,
//   },
// ];

// export const PRODUCT_ROUTES = [
//   {
//     path: "",
//     rule: RULES.READ_SHOP,
//     component: SpecificShop,
//     exact: true,
//   },
//   {
//     path: "/create",
//     rule: RULES.CREATE_PRODUCT,
//     component: CreateProduct,
//     exact: false,
//   },
//   {
//     path: "/edit",
//     rule: RULES.EDIT_PRODUCT,
//     component: EditProduct,
//     exact: false,
//   },
//   {
//     path: "/:slug",
//     rule: RULES.READ_PRODUCT,
//     component: SpecificProduct,
//     exact: false,
//   },
// ];

// export const SHOP_ROUTES = [
//   {
//     path: "",
//     rule: RULES.READ_SHOP,
//     component: Shops,
//     exact: true,
//   },
//   {
//     path: "/create",
//     rule: RULES.CREATE_SHOP,
//     component: CreateShop,
//     exact: false,
//   },
//   {
//     path: "/edit",
//     rule: RULES.EDIT_SHOP,
//     component: EditShop,
//     exact: false,
//   },
//   {
//     path: "/:slug",
//     rule: RULES.READ_SHOP,
//     component: ProductRoutes,
//     exact: false,
//   },
// ];

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
  // {
  //   path: "/shops",
  //   name: "Shops",
  //   iconName: "business",
  //   component: Shops,
  //   rule: RULES.READ_SHOP,
  //   exact: false,
  // },
  // {
  //   path: "/orders",
  //   name: "Orders",
  //   iconName: "orders",
  //   component: Orders,
  //   rule: RULES.READ_ORDER,
  //   exact: false,
  // },
  // {
  //   path: "/cart",
  //   name: "Cart",
  //   iconName: "shopping_cart",
  //   component: Cart,
  //   rule: RULES.MANAGE_CART,
  //   exact: false,
  // },
  // {
  //   path: "/settings",
  //   name: "Settings",
  //   iconName: "settings",
  //   component: Settings,
  //   rule: RULES.MANAGE_APP,
  //   exact: false,
  // },
];
