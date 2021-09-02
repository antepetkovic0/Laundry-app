export const SET_DATA = "SET_DATA";
// export const ADD_TODO = "ADD_TODO";
// export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_USER = "DELETE_USER";
export const DELETE_DASHBOARD_DATA = "DELETE_DASHBOARD_DATA";

export const setDashboardData = (data, type) => ({
  type: SET_DATA,
  payload: {
    type,
    data,
  },
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

export const deleteDashboardData = (id, type) => ({
  type: DELETE_DASHBOARD_DATA,
  payload: {
    type,
    id,
  },
});
