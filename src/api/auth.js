import { httpClient } from "./client";
import * as profileActions from "../store/actions/profile";
import { toastMessage } from "../utils/toast";
import { TOAST_TYPE } from "../constants/toastType";

export const loginUser = (userCredentials, history) => async (dispatch) => {
  try {
    const { data } = await httpClient.post("/auth/login", userCredentials);
    const { user, accessToken } = data;

    localStorage.setItem("access-token", accessToken);
    localStorage.setItem("user", JSON.stringify(user));

    dispatch(profileActions.setUserData(user));
    history.push("/app");
  } catch (err) {
    toastMessage(err.response.data.message, TOAST_TYPE.ERROR);
  }
};

export const registerUser = async (user) => {
  try {
    const { data } = await httpClient.post(`/auth/register`, user);
    toastMessage(data.message, TOAST_TYPE.SUCCESS);
  } catch (err) {
    toastMessage(err.response.data.message, TOAST_TYPE.ERROR);
  }
};

export const requestResetPassword = async (email) => {
  try {
    const { data } = await httpClient.post("/auth/request-reset-password", {
      email,
    });
    toastMessage(data.message, TOAST_TYPE.SUCCESS);
  } catch (err) {
    toastMessage(err.response.data.message, TOAST_TYPE.ERROR);
  }
};

export const resetPassword = async (data, history) => {
  try {
    await httpClient.post("/auth/reset-password", data);
    toastMessage(
      "Password was succesfully reseted. Feel free to login with new credentials.",
      TOAST_TYPE.SUCCESS
    );
    history.push("/auth/sign-in");
  } catch (err) {
    toastMessage(err.response.data.message, TOAST_TYPE.ERROR);
  }
};
