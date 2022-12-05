import React from "react";
import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/Home/HomeLayout";
import HomePage from "../pages/HomePage/HomePage";
import JobCategories from "../pages/JobCategories/JobCategories";
import JobDetail from "../pages/JobDetail/JobDetail";
import JobListPage from "../pages/JobList/JobListPage";
import UserProfile from "../pages/UserProfile/UserProfile";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/jobs", search: "?query", element: <JobListPage /> },
        { path: "/categories/:jobCatId", element: <JobCategories /> },
        { path: "/user/:userId", element: <UserProfile /> },
        { path: "/user/:userId/:jobId", element: <JobDetail /> },
      ],
    },
  ]);
  return routing;
}
