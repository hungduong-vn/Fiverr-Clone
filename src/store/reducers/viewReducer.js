import {
  SET_SIGN_IN_MODAL,
  SET_SIGN_UP_MODAL,
} from "../types/view.types";

const DEFAULT_STATE = { signInModal: {}, signUpModal: {} };

export const viewReducer = (
  state = { ...DEFAULT_STATE },
  { type, payload }
) => {
  switch (type) {
    case SET_SIGN_IN_MODAL:
      state.signInModal.close = payload.close;
      state.signInModal.open = payload.open;
      return state;
    case SET_SIGN_UP_MODAL:
      state.signUpModal.close = payload.close;
      state.signUpModal.open = payload.open;
      return state;
    default:
      return state;
  }
};
