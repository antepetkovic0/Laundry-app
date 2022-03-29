export const GET_USERS_INIT = "GET_USERS_INIT";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

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
