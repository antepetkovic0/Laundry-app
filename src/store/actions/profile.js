export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const setUserData = (data) => ({
  type: LOGIN_USER,
  payload: data,
});

export const clearUserData = () => ({
  type: LOGOUT_USER,
});
