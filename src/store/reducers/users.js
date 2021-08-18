import {
  GET_USERS,
  // ADD_TODO,
  // TOGGLE_TODO,
  DELETE_USER,
} from "../actions/users";

const INITIAL_STATE = {
  users: [],
};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: [...state.users, ...action.payload] };
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
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default users;
