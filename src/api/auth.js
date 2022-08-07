import axios from "axios";
import { httpClient } from "./client";
import { setUserData } from "../store/actions/profile";

export const loginUser = (userCredentials, history) => async (dispatch) => {
  try {
    const { data } = await httpClient.post("/auth/login", userCredentials);
    const { user, accessToken } = data;

    localStorage.setItem("access-token", accessToken);
    localStorage.setItem("user", JSON.stringify(user));

    dispatch(setUserData(user));
    history.push("/app");
  } catch (err) {
    console.log("we are in err");
    // if (err.response.data.authenticationErr) {
    //   dispatch(logoutUser());
    // }
    // dispatch(setShopsError(err.response.data.authenticationErr));
    // toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};

export const auth = async (data) => {
  const query = data.roleId ? "register" : "login";
  return httpClient.post(`/auth/${query}`, data);
};

export const refreshTokens = async (refreshToken) =>
  httpClient.post(`${URL}/api/auth/refresh`, refreshToken);
