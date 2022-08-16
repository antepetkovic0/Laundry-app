// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from "redux";

import { DRAWER_TYPE } from "../../utils/constants";

import profile from "./profile";
import dashboard from "./dashboard";
import dialog from "./dialog";
import shops from "./shops";
import products from "./products";
import cart from "./cart";
import users from "./users";
import ui from "./ui";
import { createTypedDrawers } from "./drawer";

const rootReducer = combineReducers({
  profile,
  dashboard,
  dialog,
  shops,
  products,
  cart,
  users,
  drawerHome: createTypedDrawers(DRAWER_TYPE.HOME),
  ui,
});

export default rootReducer;
