/* eslint-disable prefer-arrow-callback */
import React from "react";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { TOAST_TYPE } from "../utils/constants";
import { toastMessage } from "../utils/toast";
import { setCookie } from "../utils/cookie";
import { httpClient } from "./client";
import { setUserData } from "../store/actions/profile";
// const URL = "http://192.168.1.8:8080/clean-api/auth";
// const URL = "http://localhost:8080";
// axios.defaults.withCredentials = true;
// axios.defaults.credentials = "include";

export const loginUser = (userCredentials, history) => async (dispatch) => {
  try {
    const { data } = await httpClient.post("/auth/login", userCredentials);
    dispatch(setUserData(data));
    setCookie("user", JSON.stringify(data), 10);
    history.push("/dashboard");
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
  return axios.post(`${URL}/api/auth/${query}`, data);
};
