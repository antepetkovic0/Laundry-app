/* eslint-disable prefer-arrow-callback */
import React from "react";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { setUserProfile } from "../store/actions/profile";
import { TOAST_TYPE } from "../utils/constants";
import { toastMessage } from "../utils/toast";
// const URL = "http://192.168.1.8:8080/clean-api/auth";
const URL = "http://localhost:8080";
axios.defaults.withCredentials = true;
axios.defaults.credentials = "include";

export const auth = async (data) => {
  const query = data.roleId ? "register" : "login";
  return axios.post(`${URL}/api/auth/${query}`, data);
};

export const googleAuth = async (data) =>
  axios.post(`${URL}/api/auth/google`, data);

export const getProfile = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/api/auth/profile`);
    dispatch(setUserProfile(data));
    console.log("user data", data);
  } catch (err) {
    console.log(err.response);
    // if (err.response?.data?.authenticationErr) {
    //   window.location.href = "http://localhost:3000/auth";
    // } else {
    //   console.log("blabla", err);
    // }
    // toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};
