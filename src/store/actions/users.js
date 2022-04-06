export const GET_USERS_INIT = "GET_USERS_INIT";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const GET_PENDING_USERS_INIT = "GET_PENDING_USERS_INIT";
export const GET_PENDING_USERS_SUCCESS = "GET_PENDING_USERS_SUCCESS";
export const GET_PENDING_USERS_ERROR = "GET_PENDING_USERS_ERROR";

export const getUsers = () => ({
  type: GET_USERS_INIT,
});

export const setUsersData = (data) => ({
  type: GET_USERS_SUCCESS,
  payload: {
    data,
  },
});

export const setUsersError = (data) => ({
  type: GET_USERS_ERROR,
  payload: {
    error: data,
  },
});

export const getPendingUsers = () => ({
  type: GET_PENDING_USERS_INIT,
});

export const setPendingUsersData = (data) => ({
  type: GET_PENDING_USERS_SUCCESS,
  payload: {
    data,
  },
});

export const setPendingUsersError = (data) => ({
  type: GET_PENDING_USERS_ERROR,
  payload: {
    error: data,
  },
});
