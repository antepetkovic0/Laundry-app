import { OPEN_DRAWER, CLOSE_DRAWER } from "../actions/drawer";

export function createTypedDrawers(drawerType) {
  return function drawer(state = false, action) {
    switch (action.type) {
      case OPEN_DRAWER(drawerType):
        return action.payload;
      case CLOSE_DRAWER(drawerType):
        return action.payload;
      default:
        return state;
    }
  };
}
