import { getDashboardData } from "../store/actions/dashboard";
import { setUIError, startUILoader, stopUILoader } from "../store/actions/ui";
import { httpClient } from "./client";

// const URL = "http://localhost:8080/api/shops";
// axios.defaults.withCredentials = true;
// axios.defaults.credentials = "include";

export const fetchDashboardData =
  (actionName, queryPath) => async (dispatch) => {
    try {
      dispatch(startUILoader(actionName));
      const { data } = await httpClient.get(`/dashboard/${queryPath}`);
      dispatch(getDashboardData(actionName, data));
    } catch (err) {
      console.log("we are in err");
      dispatch(setUIError(actionName));
      // if (err.response.data.authenticationErr) {
      //   dispatch(logoutUser());
      // }
      // dispatch(setShopsError(err.response.data.authenticationErr));
      // toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
    } finally {
      dispatch(stopUILoader(actionName));
    }
  };
