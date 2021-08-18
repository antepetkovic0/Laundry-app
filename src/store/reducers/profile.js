import { SET_PROFILE } from "../actions/profile";

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  address: "",
  imageUrl: "",
  roleId: "",
  permissions: [],
  isAuth: false,
};

const profile = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    default:
      return state;
  }
};

export default profile;
