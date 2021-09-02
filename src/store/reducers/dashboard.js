import {
  SET_DATA,
  // ADD_TODO,
  // TOGGLE_TODO,
  DELETE_USER,
  DELETE_DASHBOARD_DATA,
} from "../actions/dashboard";

const INITIAL_STATE = {
  users: [],
  shops: [],
  pending: [],
  orders: [],
};

const dashboard = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        [action.payload.type]: [
          ...action.payload.data,
          ...state[action.payload.type],
        ],
      };
    // case ADD_TODO:
    //   return { ...state, users: [...state.users, action.payload] };
    // case TOGGLE_TODO:
    //   return {
    //     ...state,
    //     users: state.users.map((todo) =>
    //       todo.id !== action.payload
    //         ? todo
    //         : { ...todo, completed: !todo.completed }
    //     ),
    //   };
    case DELETE_DASHBOARD_DATA:
      return {
        ...state,
        [action.payload.type]: state[action.payload.type].filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default dashboard;
