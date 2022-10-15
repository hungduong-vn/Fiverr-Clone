import { SET_OVERFLOW_NAVBAR, SET_SHOW_SIDEBAR } from "../types/layout.types";

const setShowSideBar = (data) => ({ type: SET_SHOW_SIDEBAR, payload: data });

const setOverflowNavbar = (data) => ({type: SET_OVERFLOW_NAVBAR, payload: data})

export {setShowSideBar, setOverflowNavbar}
