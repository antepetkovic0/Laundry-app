import { FETCH_USERS } from "../actions/users";

const INITIAL_STATE = {
  list: [],
  lastFetched: null,
};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        list: action.payload.data,
        lastFetched: action.payload.fetchTime,
      };
    default:
      return state;
  }
};

export default users;
