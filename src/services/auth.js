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

const checkUsernameExistedApi = (data) =>
  request({ url: "auth/check-username-existed", method: "POST", data });

const checkEmailExistedApi = (data) =>
  request({ url: "auth/check-email-existed", method: "POST", data });

export {
  signInApi,
  signUpApi,
  checkUsernameExistedApi,
  checkEmailExistedApi,
};
