/* eslint-disable prefer-arrow-callback */
import axios from "axios";
import { resolve } from "../utils/resolver";
// const URL = "http://192.168.1.8:8080/clean-api/auth";
const URL = "http://localhost:8080";
axios.defaults.withCredentials = true;
axios.defaults.credentials = "include";

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// login / service register request / user register
export const auth = async (data) => {
  let query = "login";
  if (data.roleId && data.roleId === 2) {
    query = "request";
  }
  if (data.roleId && data.roleId === 3) {
    query = "register";
  }

  return axios.post(`${URL}/api/auth/${query}`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const verifyAuth = async (data) => {
  const resolved = await resolve(axios.post(`${URL}/api/auth/verify`, data));
  return resolved;
};
