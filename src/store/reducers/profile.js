import { LOGIN_USER, LOGOUT_USER } from "../actions/profile";

const INITIAL_STATE = {
  isAuth: false,
};

const profile = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...action.payload,
        isAuth: true,
      };
    case LOGOUT_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default profile;
