import { SET_USER } from "../types/user.types";

let userInfo = localStorage.getItem("user");
if (userInfo) {
  userInfo = JSON.parse(userInfo);
}

const DEFAULT_STATE = { userInfo };

const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case SET_USER:
      state.userInfo = { ...payload };
      localStorage.setItem("user", JSON.stringify(payload));
      return state;

    default:
      return state;
  }
};

export { userReducer };
