// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from "redux";
import { createTypedDrawers } from "./drawer";
import { createTypedSwitchers } from "./switcher";

const rootReducer = combineReducers({
  drawerHome: createTypedDrawers("HOME"),
  switchHomeRole: createTypedSwitchers("HOME_ROLE"),
});

export default rootReducer;
