import { SET_SIGN_IN_MODAL, SET_SIGN_UP_MODAL } from "../types/view.types";

const setSignInModal = (data) => ({ type: SET_SIGN_IN_MODAL, payload: data });
const setSignUpModal = (data) => ({ type: SET_SIGN_UP_MODAL, payload: data });

export { setSignInModal, setSignUpModal };
