import { USER_INFO_KEY } from "../../constants/user.const";
import { SET_USER } from "../types/user.types";

let userInfo = localStorage.getItem(USER_INFO_KEY);
if (userInfo) {
  userInfo = JSON.parse(userInfo);
}

const DEFAULT_STATE = { userInfo };

const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case SET_USER:
      state.userInfo = { ...payload };
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(payload));
      return state;

    default:
      return state;
  }
};

export { userReducer };
