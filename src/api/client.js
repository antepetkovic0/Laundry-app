/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable consistent-return */
import axios from "axios";
import { store } from "../store";
import { logoutUser } from "../store/actions/profile";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8080/api",
});

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async function (error) {
    const initialRequest = error.config;
    console.log(initialRequest);
    if (error.response.status === 401 && !initialRequest._retry) {
      initialRequest._retry = true;
      return instance(initialRequest);
      // store.dispatch(logoutUser());
    }
    return Promise.reject(error);
    // return Promise.reject(error)
  }
);

export const httpClient = instance;
