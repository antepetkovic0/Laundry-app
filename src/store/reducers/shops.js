import {
  GET_SHOPS_INIT,
  GET_SHOPS_SUCCESS,
  GET_SHOPS_ERROR,
} from "../actions/shops";

const INITIAL_STATE = {
  loading: true,
  list: [],
  error: null,
};

const shops = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SHOPS_INIT:
      return {
        ...state,
        loading: true,
      };
    case GET_SHOPS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload.data,
      };
    case GET_SHOPS_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default shops;
