export const GET_USERS = "GET_USERS";
// export const ADD_TODO = "ADD_TODO";
// export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_USER = "DELETE_USER";

export const getUsers = (todos) => ({
  type: GET_USERS,
  payload: todos,
});

// export const addTodo = (todo) => ({
//   type: ADD_TODO,
//   payload: todo,
// });

// //change prop completed to true/false
// export const toggleTodo = (id) => ({
//   type: TOGGLE_TODO,
//   payload: id,
// });

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});
