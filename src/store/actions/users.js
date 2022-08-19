export const FETCH_USERS = "FETCH_USERS";
export const APPROVE_USER = "APPROVE_USER";
export const DELETE_USER = "DELETE_USER";

export const getUsersData = (data) => ({
  type: FETCH_USERS,
  payload: {
    data,
    fetchTime: new Date().getTime(),
  },
});

export const approveUser = (id) => ({
  type: APPROVE_USER,
  payload: {
    id,
  },
});

export const deleteOrDeclineUser = (type, id) => ({
  type,
  payload: {
    id,
  },
});
