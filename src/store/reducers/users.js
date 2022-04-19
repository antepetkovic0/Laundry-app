import {
  GET_USERS_INIT,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from "../actions/users";

const INITIAL_STATE = {
  userIds: [],
  list: [],
  lastFetched: 0,
};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS_INIT:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload.data,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default users;
