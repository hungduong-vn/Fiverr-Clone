import React from "react";
import { useSelector } from "react-redux";

export default function SignInModalFooter({ closeModal }) {
  const { signUpModal } = useSelector((state) => state.viewReducer);
  return (
    <div className="d-flex justify-content-center">
      Not a member yet?
      <button
        className="text-success pl-2"
        onClick={() => {
          closeModal();
          signUpModal.open();
        }}
      >
        Join now
      </button>
    </div>
  );
}
