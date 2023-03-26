import { message, notification } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";

export default function AuthorizeGuard() {
  const { userName } = useParams();
  const { userInfo } = useSelector((state) => state.userReducer);
  const { signInModal } = useSelector((state) => state.viewReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      signInModal.open();
      message.info("Please sign in first!");
      return;
    }
    // Not Safe: change userInfo.name in localStorage & reload window
    // -> redux userReducer update -> grant access
    if (userName !== userInfo?.name) {
      notification.warning({ message: "Page not accessible" });
      navigate("/");
    }
  });

  return userInfo ? <Outlet /> : <Navigate to={"/"} />;
}
