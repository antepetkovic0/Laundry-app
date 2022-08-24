import * as uiActions from "../store/actions/ui";
import * as dialogActions from "../store/actions/dialog";
import * as shopActions from "../store/actions/shops";
import { TOAST_TYPE } from "../utils/constants";
import { toastMessage } from "../utils/toast";
import { httpClient } from "./client";

export const fetchShops = (actionName) => async (dispatch) => {
  try {
    dispatch(uiActions.startUILoader(actionName));
    const { data } = await httpClient.get("/shops");
    dispatch(shopActions.getShops(data));
  } catch (err) {
    dispatch(uiActions.setUIError(actionName));
  } finally {
    dispatch(uiActions.stopUILoader(actionName));
  }
};

export const fetchShopBySlugName =
  (actionName, slugName) => async (dispatch) => {
    try {
      dispatch(uiActions.startUILoader(actionName));
      const { data } = await httpClient.get(`/shops/${slugName}`);
      dispatch(shopActions.getSpecificShop(data));
    } catch (err) {
      dispatch(uiActions.setUIError(actionName));
    } finally {
      dispatch(uiActions.stopUILoader(actionName));
    }
  };

export const createShop = (actionName, shop, history) => async (dispatch) => {
  try {
    dispatch(uiActions.startUILoader(actionName));
    const { data } = await httpClient.post("/shops", shop);
    dispatch(shopActions.createShop(data));
    history.push(`/app/shops/${data.slug}`);
  } catch (err) {
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  } finally {
    dispatch(uiActions.stopUILoader(actionName));
  }
};

export const editShop = (actionName, shop, history) => async (dispatch) => {
  try {
    dispatch(uiActions.startUILoader(actionName));
    await httpClient.put("/shops", shop);
    dispatch(shopActions.editShop(shop.id, shop));
    history.push(`/app/shops/${shop.slug}`);
  } catch (err) {
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  } finally {
    dispatch(uiActions.stopUILoader(actionName));
  }
};

export const deleteShop = (id) => async (dispatch) => {
  try {
    await httpClient.delete(`shops/${id}`);
    dispatch(shopActions.deleteShop(id));
    dispatch(dialogActions.hideDialog());
    toastMessage("Shop has been successfully deleted", TOAST_TYPE.SUCCESS);
  } catch (err) {
    console.log(err);
    // toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};
