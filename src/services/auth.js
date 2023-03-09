import { request } from "../configs/axios";

const signInApi = (data) =>
  request({
    url: "auth/sign-in",
    method: "POST",
    data,
  });

const signUpApi = (data) =>
  request({
    url: "auth/sign-up",
    method: "POST",
    data,
  });

export { signInApi, signUpApi };
