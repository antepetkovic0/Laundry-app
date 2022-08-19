export const FETCH_DASHBOARD_USERS = "FETCH_DASHBOARD_USERS";
export const FETCH_DASHBOARD_SHOPS = "FETCH_DASHBOARD_SHOPS";
export const DECLINE_USER = "DECLINE_USER";

export const getDashboardData = (type, data) => ({
  type,
  payload: {
    data,
    fetchTime: new Date().getTime(),
  },
});
