export const TOGGLE_SWITCH = (switchType) => `TOGGLE_${switchType}_SWITCH`;

export const toggleSwitcher = (switchType) => ({
  type: TOGGLE_SWITCH(switchType),
});
