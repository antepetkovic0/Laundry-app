export const FETCH_USERS = "FETCH_USERS";

export const getUsersData = (data) => ({
  type: FETCH_USERS,
  payload: {
    data,
    fetchTime: new Date().getTime(),
  },
});
