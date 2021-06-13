// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from "redux";
import sideDrawerReducer from "./sideDrawer";

const rootReducer = combineReducers({
  sideDrawerReducer,
});

export default rootReducer;
