/* eslint-disable no-underscore-dangle */
import axios from "axios";
import { getCookie } from "../utils/cookie";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8080/api",
});

instance.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${window.localStorage.getItem(
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
        const { data } = await instance.post("/auth/refresh-tokens", {
          token: getCookie("refresh-token"),
        });
        localStorage.setItem("access-token", data.accessToken);
        return instance(initialRequest);
      } catch (_err) {
        window.location.href = "http://192.168.1.11:3000/auth/sign-in";
      }
    }

    return Promise.reject(error);
  }
);

export const httpClient = instance;
