// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from "redux";

import { DRAWER_TYPE, SWITCH_TYPE } from "../../utils/constants";

import profile from "./profile";
import dashboard from "./dashboard";
import dialog from "./dialog";
import shops from "./shops";
import users from "./users";
import pending from "./pending";
import ui from "./ui";
import { createTypedDrawers } from "./drawer";
import { createTypedSwitchers } from "./switcher";

const rootReducer = combineReducers({
  profile,
  dashboard,
  dialog,
  shops,
  users,
  pending,
  drawerHome: createTypedDrawers(DRAWER_TYPE.HOME),
  switchRoleFeatures: createTypedSwitchers(SWITCH_TYPE.ROLE_FEATURES),
  ui,
});

export default rootReducer;
