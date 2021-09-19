// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from "redux";

import { DRAWER_TYPE, SWITCH_TYPE } from "../../utils/constants";

import profile from "./profile";
import dashboard from "./dashboard";
import dialog from "./dialog";
import { createTypedDrawers } from "./drawer";
import { createTypedSwitchers } from "./switcher";

const rootReducer = combineReducers({
  profile,
  dashboard,
  dialog,
  drawerHome: createTypedDrawers(DRAWER_TYPE.HOME),
  switchRoleFeatures: createTypedSwitchers(SWITCH_TYPE.ROLE_FEATURES),
});

export default rootReducer;
