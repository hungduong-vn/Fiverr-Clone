import { message } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthenticateGuard() {
  const { userInfo } = useSelector((state) => state.userReducer);
  const { signInModal } = useSelector((state) => state.viewReducer);
  const location = useLocation();
  useEffect(() => {
    if (!userInfo) {
      signInModal.open();
      message.info("Please sign in first!");
    }
  }, []);
  return userInfo ? <Outlet /> : <Navigate to={location.pathname}/>;
}