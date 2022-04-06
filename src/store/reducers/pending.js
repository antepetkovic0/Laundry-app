import {
  GET_PENDING_USERS_INIT,
  GET_PENDING_USERS_SUCCESS,
  GET_PENDING_USERS_ERROR,
} from "../actions/users";

const INITIAL_STATE = {
  loading: false,
  list: null,
  error: null,
};

const pending = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PENDING_USERS_INIT:
      return {
        ...state,
        loading: true,
      };
    case GET_PENDING_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload.data,
      };
    case GET_PENDING_USERS_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default pending;
