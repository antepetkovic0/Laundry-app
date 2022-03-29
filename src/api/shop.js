// import axios from "axios";
import {
  setDashboardData,
  deleteDashboardData,
} from "../store/actions/dashboard";
import { hideDialog } from "../store/actions/dialog";
import { logoutUser } from "../store/actions/profile";
import { getShops, setShopsData, setShopsError } from "../store/actions/shops";
import { TOAST_TYPE } from "../utils/constants";
import { toastMessage } from "../utils/toast";
import { httpClient } from "./client";

// const URL = "http://localhost:8080/api/shops";
// axios.defaults.withCredentials = true;
// axios.defaults.credentials = "include";

export const fetchShops = () => async (dispatch) => {
  dispatch(getShops());
  try {
    // const { data } = await axios.get(`${URL}`);
    const { data } = await httpClient.get("/shops");
    console.log(data);
    dispatch(setShopsData(data));
    // dispatch(setDashboardData(data, "shops"));
  } catch (err) {
    console.log("we are in err");
    // if (err.response.data.authenticationErr) {
    //   dispatch(logoutUser());
    // }
    dispatch(setShopsError(err.response.data.authenticationErr));
    // toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};

export const createShop = (shop) => async (dispatch) => {
  try {
    const { data } = await httpClient.post("/shops", shop);
    dispatch(deleteDashboardData([data], "shops"));
    toastMessage("Shop has been successfully created", TOAST_TYPE.SUCCESS);
  } catch (err) {
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};

export const deleteShop = (id) => async (dispatch) => {
  try {
    await httpClient.delete(`shops/${id}`);
    dispatch(deleteDashboardData(id, "shops"));
    dispatch(hideDialog());
    toastMessage("Shop has been successfully deleted", TOAST_TYPE.SUCCESS);
  } catch (err) {
    console.log(err);
    // toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};
