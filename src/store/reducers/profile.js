import { SET_PROFILE } from "../actions/profile";

const INITIAL_STATE = {
  isAuth: false,
};

const profile = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...action.payload,
        isAuth: true,
      };
    case "LOG_OFF":
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default profile;
