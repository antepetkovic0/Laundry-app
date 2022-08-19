import { DECLINE_USER } from "../actions/dashboard";
import { FETCH_USERS, APPROVE_USER, DELETE_USER } from "../actions/users";

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
    case APPROVE_USER:
      return {
        ...state,
        list: state.list.map((user) =>
          user.id !== action.payload.id
            ? user
            : {
                ...user,
                status: "ACTIVE",
              }
        ),
      };
    case DELETE_USER:
    case DECLINE_USER:
      return {
        ...state,
        list: state.list.filter((user) => user.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default users;
