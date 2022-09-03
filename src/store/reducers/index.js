// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from "redux";

import profile from "./profile";
import dashboard from "./dashboard";
import users from "./users";
import shops from "./shops";
import products from "./products";
import orders from "./orders";
import cart from "./cart";
import dialog from "./dialog";
import ui from "./ui";

const rootReducer = combineReducers({
  profile,
  dashboard,
  users,
  shops,
  products,
  orders,
  cart,
  dialog,
  ui,
});

export default rootReducer;
