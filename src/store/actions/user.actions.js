import { REMOVE_USER, SET_USER, UPDATE_USER } from "../types/user.types";

const setUserAction = (data) => ({
  type: SET_USER,
  payload: data,
});

const removeUserAction = () => ({ type: REMOVE_USER, payload: null });

const updateUserAction = (data) => ({ type: UPDATE_USER, payload: data });

export { setUserAction, removeUserAction, updateUserAction };
