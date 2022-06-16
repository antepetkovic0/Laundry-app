import { hideDialog } from "../store/actions/dialog";
import { getShops, getSpecificShop } from "../store/actions/shops";
import * as actions from "../store/actions/shops";
import { setUIError, startUILoader, stopUILoader } from "../store/actions/ui";
import { TOAST_TYPE } from "../utils/constants";
import { toastMessage } from "../utils/toast";
import { httpClient } from "./client";

export const fetchShops = (actionName) => async (dispatch) => {
  try {
    dispatch(startUILoader(actionName));
    const { data } = await httpClient.get("/shops");
    dispatch(getShops(data));
  } catch (err) {
    dispatch(setUIError(actionName));
  } finally {
    dispatch(stopUILoader(actionName));
  }
};

export const fetchShopBySlugName =
  (actionName, slugName) => async (dispatch) => {
    try {
      dispatch(startUILoader(actionName));
      const { data } = await httpClient.get(`/shops/${slugName}`);
      dispatch(getSpecificShop(data));
    } catch (err) {
      dispatch(setUIError(actionName));
    } finally {
      dispatch(stopUILoader(actionName));
    }
  };

export const createShop = (actionName, shop, history) => async (dispatch) => {
  try {
    dispatch(startUILoader(actionName));
    const { data } = await httpClient.post("/shops", shop);
    dispatch(actions.createShop(data));
    history.push(`/dashboard/shops/${data.slug}`);
  } catch (err) {
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  } finally {
    dispatch(stopUILoader(actionName));
  }
};

export const editShop = (actionName, shop, history) => async (dispatch) => {
  try {
    dispatch(startUILoader(actionName));
    const { data } = await httpClient.put(`shops/${shop.id}/edit`, shop);
    dispatch(actions.editShop(data.id, data));
    history.push(`/dashboard/shops/${data.slug}`);
  } catch (err) {
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  } finally {
    dispatch(stopUILoader(actionName));
  }
};

export const deleteShop = (id) => async (dispatch) => {
  try {
    await httpClient.delete(`shops/${id}`);
    dispatch(actions.deleteShop(id));
    dispatch(hideDialog());
    toastMessage("Shop has been successfully deleted", TOAST_TYPE.SUCCESS);
  } catch (err) {
    console.log(err);
    // toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};
