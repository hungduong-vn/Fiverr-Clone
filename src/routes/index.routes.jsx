import React from "react";
import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/Home/HomeLayout";
import HomePage from "../pages/HomePage/HomePage";
import JobCategories from "../pages/JobCategories/JobCategories";
import JobListPage from "../pages/JobList/JobListPage";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/jobs/:jobQuery", element: <JobListPage /> },
        { path: "/categories/:jobCatId", element: <JobCategories /> },
      ],
    },
  ]);
  return routing;
}
