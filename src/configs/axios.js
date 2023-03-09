import axios from "axios";
import { BASE_URL } from "../constants/common";
import { USER_INFO_KEY } from "../constants/user.const";

const request = axios.create({
  baseURL: BASE_URL,
});

request.interceptors.request.use((config) => {
  let userInfo = localStorage.getItem(USER_INFO_KEY);

  if (userInfo) {
    userInfo = JSON.parse(userInfo);
    config.headers.Authorization = `Bearer ${userInfo.accessToken}`;
  }
  return config;
});

request.interceptors.response.use((response) => {
  return response;
});

export { request };
