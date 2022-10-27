import {
  SET_OVERFLOW_NAVBAR,
  SET_SCREEN_WIDTH,
  SET_SHOW_INTROVIDEO_MODAL,
  SET_SHOW_SIDEBAR,
} from "../types/layout.types";

const DEFAULT_VALUE = {
  showSideBar: false,
  overflowNav: false,
  showIntroVideo: false,
  screenWidth: window.innerWidth,
};
export const layoutReducer = (state = DEFAULT_VALUE, { type, payload }) => {
  switch (type) {
    case SET_SHOW_SIDEBAR:
      state.showSideBar = payload;
      return { ...state };

    case SET_OVERFLOW_NAVBAR:
      state.overflowNav = payload;
      return { ...state };

    case SET_SHOW_INTROVIDEO_MODAL:
      state.showIntroVideo = payload;
      return { ...state };

    case SET_SCREEN_WIDTH:
      // console.log("set ScreenWidth");
      state.screenWidth = payload;
      return { ...state };

    default:
      return state;
  }
};
