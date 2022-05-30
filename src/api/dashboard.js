import { getDashboardData } from "../store/actions/dashboard";
import { clearUserData } from "../store/actions/profile";
import { setUIError, startUILoader, stopUILoader } from "../store/actions/ui";
import { httpClient } from "./client";

// const URL = "http://localhost:8080/api/shops";
// axios.defaults.withCredentials = true;
// axios.defaults.credentials = "include";

// export const fetchDashboardData =
//   (actionName, queryPath) => async (dispatch) => {
//     dispatch(startUILoader(actionName));
//     const { data } = await httpClient.get(`/dashboard/${queryPath}`);
//     dispatch(getDashboardData(actionName, data));
//     dispatch(stopUILoader(actionName));
//   };
export const fetchDashboardData =
  (actionName, queryPath) => async (dispatch) => {
    try {
      dispatch(startUILoader(actionName));
      const { data } = await httpClient.get(`/dashboard/${queryPath}`);
      dispatch(getDashboardData(actionName, data));
    } catch (err) {
      console.log("we are in err", err.response);
      dispatch(setUIError(actionName));
    } finally {
      dispatch(stopUILoader(actionName));
    }
  };
