import { SHOW_DIALOG, HIDE_DIALOG } from "../actions/dialog";

const INITIAL_STATE = {
  dialogType: null,
  dialogProps: {},
};

const dialog = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_DIALOG:
      return {
        ...action.payload,
      };
    case HIDE_DIALOG:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default dialog;
