import axios from "axios";
import { resolve } from "../utils/resolver";

const URL = "http://localhost:8080/api/users";
axios.defaults.withCredentials = true;
axios.defaults.credentials = "include";

// axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     console.log(error);
//     let res = error.response;
//     // if (res.status == 401) {
//     //   window.location.href = “https://example.com/login”;
//     // }
//     // console.error(“Looks like there was a problem. Status Code: “ + res.status);
//     return Promise.reject(error);
//   }
// );

export const getUsers = async () => {
  const resolved = await resolve(
    axios.get(`${URL}`, {
      headers: {
        "Content-type": "application/json",
      },
    })
  );
  return resolved;
};
