/* eslint-disable no-underscore-dangle */
import axios from "axios";
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from "history";
import { store } from "../store";
import { clearUserData, LOGOUT_USER } from "../store/actions/profile";
import { startUILoader } from "../store/actions/ui";
import { getCookie } from "../utils/cookie";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8080/api",
});

instance.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "access-token"
    )}`;

    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const initialRequest = error.config;

    if (error.response.status === 401 && !initialRequest._retry) {
      initialRequest._retry = true;

      try {
        const { data } = await instance.post("/auth/refresh", {
          token: getCookie("refresh-token"),
        });
        localStorage.setItem("access-token", data.accessToken);
        return instance(initialRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export const httpClient = instance;
