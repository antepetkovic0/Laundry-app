import { TOGGLE_SWITCH } from "../actions/switcher";

export function createTypedSwitchers(switchType) {
  return function switcher(state = false, action) {
    switch (action.type) {
      case TOGGLE_SWITCH(switchType):
        return !state;
      default:
        return state;
    }
  };
}
