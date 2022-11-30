import axios from "axios";
import { BASE_URL } from "../constants/common";

const request = axios.create({
  baseURL: BASE_URL,
});

export { request };
