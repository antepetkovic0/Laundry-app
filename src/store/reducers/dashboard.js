import {
  FETCH_DASHBOARD_SHOPS,
  FETCH_DASHBOARD_USERS,
  DECLINE_USER,
} from "../actions/dashboard";
import { APPROVE_USER, DELETE_USER } from "../actions/users";

const INITIAL_STATE = {
  users: {
    lastFetched: null,
    active: 0,
    pending: 0,
    disabled: 0,
  },
  shops: {
    lastFetched: null,
    count: 0,
  },
  orders: {
    lastFetched: null,
    count: 0,
    list: [],
  },
};

const dashboard = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_USERS:
      return {
        ...state,
        users: {
          ...action.payload.data,
          lastFetched: action.payload.fetchTime,
        },
      };
    case FETCH_DASHBOARD_SHOPS:
      return {
        ...state,
        shops: {
          count: action.payload.data,
          lastFetched: action.payload.fetchTime,
        },
      };
    case APPROVE_USER:
      return {
        ...state,
        users: {
          ...state.users,
          active: state.users.active + 1,
          pending: state.users.pending - 1,
        },
      };
    case DELETE_USER:
      return {
        ...state,
        users: {
          ...state.users,
          active: state.users.active - 1,
        },
      };
    case DECLINE_USER:
      return {
        ...state,
        users: {
          ...state.users,
          pending: state.users.pending - 1,
        },
      };
    default:
      return state;
  }
};

export default dashboard;
