import React from "react";
import { useRoutes } from "react-router-dom";
import AuthenticateGuard from "../guards/Authenticate.guard";
import AuthorizeGuard from "../guards/Authorize.guard";
import HomeLayout from "../layouts/Home/HomeLayout";
import HomePage from "../pages/HomePage/HomePage";
import JobCategories from "../pages/JobCategories/JobCategories";
import JobDetail from "../pages/JobDetail/JobDetail";
import JobListPage from "../pages/JobList/JobListPage";
import NotFound from "../pages/NotFound/NotFound";
import EditProfile from "../pages/UserProfile/EditProfile/EditProfile";
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
        { path: "/user/:userName", element: <UserProfile /> },
        // { path: "/profile/:userName", element: <EditProfile /> },
        // { path: "/user/:userName/:jobId", element: <JobDetail /> },
        { path: "/user/:userName/:jobId", element: <JobDetail /> },
        {
          path: "/",
          element: <AuthenticateGuard />,
          children: [],
        },
        {
          path: "/",
          element: <AuthorizeGuard />,
          children: [{ path: "/profile/:userName", element: <EditProfile /> }],
        },
      ],
    },
    { path: "*", element: <NotFound /> },
    { path: "/not-found", element: <NotFound /> },
  ]);
  return routing;
}
