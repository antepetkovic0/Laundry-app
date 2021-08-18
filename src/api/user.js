import axios from "axios";
import { resolve } from "../utils/resolver";

const URL = "http://localhost:8080/clean-api/users";
axios.defaults.withCredentials = true;
axios.defaults.credentials = "include";

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
