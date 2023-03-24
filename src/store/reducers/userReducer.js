import { USER_INFO_KEY } from "../../constants/user.const";
import { REMOVE_USER, SET_USER, UPDATE_USER } from "../types/user.types";

let userInfo = localStorage.getItem(USER_INFO_KEY);
if (userInfo) {
  userInfo = JSON.parse(userInfo);
}

const DEFAULT_STATE = { userInfo };

const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case SET_USER:
      console.log("SET_USER: ", payload);
      state.userInfo = { ...payload };
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(payload));
      return state;
    case REMOVE_USER:
      console.log("REMOVE_USER");
      state.userInfo = payload;
      localStorage.removeItem(USER_INFO_KEY);
      return state;
    case UPDATE_USER:
      console.log("UPDATE_USER", payload);
      const newUser = { ...state.userInfo, ...payload };
      state.userInfo = newUser;
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(newUser));
      return state;
    default:
      return state;
  }
};

export { userReducer };
