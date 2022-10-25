import React from "react";
import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/Home/HomeLayout";
import HomePage from "../pages/HomePage";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [{ path: "/", element: <HomePage /> }],
    },
  ]);
  return routing;
}
