export const START_UI_LOADER = "START_UI_LOADER";
export const STOP_UI_LOADER = "STOP_UI_LOADER";
export const SET_UI_ERROR = "SET_UI_ERROR";
export const CLEAR_UI_ERROR = "CLEAR_UI_ERROR";

export const startUILoader = (name) => ({
  type: START_UI_LOADER,
  payload: {
    action: {
      name,
    },
  },
});

export const stopUILoader = (name) => ({
  type: STOP_UI_LOADER,
  payload: { name },
});

export const setUIError = (name) => ({
  type: SET_UI_ERROR,
  payload: {
    action: {
      name,
    },
  },
});

export const clearUIError = (name) => ({
  type: CLEAR_UI_ERROR,
  payload: { name },
});
