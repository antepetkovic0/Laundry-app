export function createTypedSwitchers(switchType) {
  return function switcher(state = false, action) {
    switch (action.type) {
      case `TOGGLE_SWITCH_${switchType}`:
        return !state;
      default:
        return state;
    }
  };
}
