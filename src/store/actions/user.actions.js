import { SET_USER } from "../types/user.types";

const setUserAction = (data) => ({
  type: SET_USER,
  payload: data,
});

export { setUserAction };
