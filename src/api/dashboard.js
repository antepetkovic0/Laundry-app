import { getDashboardData, setDashboardData } from "../store/actions/dashboard";
import { httpClient } from "./client";

// const URL = "http://localhost:8080/api/shops";
// axios.defaults.withCredentials = true;
// axios.defaults.credentials = "include";

export const fetchDashboardData = () => async (dispatch) => {
  try {
    // const { data } = await axios.get(`${URL}`);
    dispatch(getDashboardData());
    const { data } = await httpClient.get("/overview");
    dispatch(setDashboardData(data));
  } catch (err) {
    console.log("we are in err");
    // if (err.response.data.authenticationErr) {
    //   dispatch(logoutUser());
    // }
    // dispatch(setShopsError(err.response.data.authenticationErr));
    // toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};
