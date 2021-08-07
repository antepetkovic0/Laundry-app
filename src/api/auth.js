import axios from "axios";
import { resolve } from "../utils/resolver";

const URL = "http://192.168.1.8:8080/clean-api/auth";

export const login = async (data) => {
  const resolved = await resolve(
    axios.post(`${URL}/login`, data, {
      headers: {
        "Content-type": "application/json",
      },
    })
  );
  return resolved;
};
