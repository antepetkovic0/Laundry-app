// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from "redux";
import { createTypedDrawers } from "./drawer";
import { createTypedSwitchers } from "./switcher";

import { DRAWER_TYPE, SWITCH_TYPE } from "../../utils/constants";

const rootReducer = combineReducers({
  drawerHome: createTypedDrawers(DRAWER_TYPE.HOME),
  switchRoleFeatures: createTypedSwitchers(SWITCH_TYPE.ROLE_FEATURES),
});

export default rootReducer;
