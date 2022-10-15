import { SET_SHOW_SIDEBAR } from "../types/layout.types";

const DEFAULT_VALUE = {
  showSideBar: false,
}
export const layoutReducer = (state=DEFAULT_VALUE, {type, payload}) => {
  switch (type) {
    case SET_SHOW_SIDEBAR:
      state.showSideBar = payload;
      return {...state};
  
    default:
      return state
  }
}