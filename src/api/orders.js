import * as uiActions from "../store/actions/ui";
import * as orderActions from "../store/actions/orders";
import { httpClient } from "./client";

export const fetchOrders = (actionName) => async (dispatch) => {
  try {
    dispatch(uiActions.startUILoader(actionName));
    const { data } = await httpClient.get("/orders");
    dispatch(orderActions.fetchOrders(data));
  } catch (err) {
    console.log("we are in err", err.response);
    dispatch(uiActions.setUIError(actionName));
  } finally {
    dispatch(uiActions.stopUILoader(actionName));
  }
};

export const createOrder = (actionName, cart) => async (dispatch) => {
  try {
    dispatch(uiActions.startUILoader(actionName));
    const { data } = await httpClient.post("/orders", cart);
    dispatch(orderActions.createOrder(data));
  } catch (err) {
    console.log("we are in err", err.response);
  } finally {
    dispatch(uiActions.stopUILoader(actionName));
  }
};
