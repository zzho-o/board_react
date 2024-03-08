import { BASE_URL } from "../config/config";
import axios from "axios";

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * 10,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const GET_BOARD = async () => {
  return API.get(`/board`)
    .then((res) => res.data)
    .catch((e) => {
      throw e;
    });
};
