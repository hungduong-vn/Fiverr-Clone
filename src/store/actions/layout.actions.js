import {
  SET_OVERFLOW_NAVBAR,
  SET_SCREEN_WIDTH,
  SET_SHOW_INTROVIDEO_MODAL,
  SET_SHOW_SIDEBAR,
} from "../types/layout.types";

const setShowSideBar = (data) => ({ type: SET_SHOW_SIDEBAR, payload: data });

const setOverflowNavbar = (data) => ({
  type: SET_OVERFLOW_NAVBAR,
  payload: data,
});

const setShowIntroVideoModal = (data) => ({
  type: SET_SHOW_INTROVIDEO_MODAL,
  payload: data,
});

const setScreenWidth = (data) => ({ type: SET_SCREEN_WIDTH, payload: data });

export {
  setShowSideBar,
  setOverflowNavbar,
  setShowIntroVideoModal,
  setScreenWidth,
};
