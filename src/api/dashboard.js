import { getDashboardData } from "../store/actions/dashboard";
import { setUIError, startUILoader, stopUILoader } from "../store/actions/ui";
import { httpClient } from "./client";

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
