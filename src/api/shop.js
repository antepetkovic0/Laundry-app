import axios from "axios";
import { setDashboardData } from "../store/actions/dashboard";
import { TOAST_TYPE } from "../utils/constants";
import { toastMessage } from "../utils/toast";

const URL = "http://localhost:8080/api/shops";
axios.defaults.withCredentials = true;
axios.defaults.credentials = "include";

export const getShops = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}`);
    dispatch(setDashboardData(data, "shops"));
  } catch (err) {
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};
