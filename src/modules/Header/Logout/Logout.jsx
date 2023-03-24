import { message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUserAction } from "../../../store/actions/user.actions";

export default function Logout({ callback }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logging out");
    dispatch(removeUserAction());
    if (callback) {
      callback();
    }
    message.success("Logged out!");
    navigate("/");
  };
  return (
    <span className="logout" onClick={handleLogout}>
      Logout
    </span>
  );
}
