import {
  START_UI_LOADER,
  STOP_UI_LOADER,
  SET_UI_ERROR,
  CLEAR_UI_ERROR,
} from "../actions/ui";

const INITIAL_STATE = {
  loader: {
    actions: [],
  },
  errors: {
    actions: [],
  },
};

const ui = (state = INITIAL_STATE, { type, payload }) => {
  const { loader, errors } = state;

  switch (type) {
    case START_UI_LOADER:
      return {
        ...state,
        loader: {
          ...loader,
          actions: [...loader.actions, payload.action],
        },
      };
    case STOP_UI_LOADER:
      return {
        ...state,
        loader: {
          ...loader,
          actions: loader.actions.filter(
            (action) => action.name !== payload.name
          ),
        },
      };
    case SET_UI_ERROR:
      return {
        ...state,
        errors: {
          ...errors,
          actions: [...errors.actions, payload.action],
        },
      };
    case CLEAR_UI_ERROR:
      return {
        ...state,
        errors: {
          ...errors,
          actions: errors.actions.filter(
            (action) => action.name !== payload.name
          ),
        },
      };
    default:
      return state;
  }
};

export default ui;
