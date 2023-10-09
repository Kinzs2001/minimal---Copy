import React from "react";
import { Navigate } from "react-router-dom";

//AuthenticationInner pages

//login
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

//pages
import ManageCategory from "../pages/ManageCategory";
import ManageUsers from "../pages/ManageUsers";
import Dashboard from "../pages/Dashboard";
import Userprofile from "../pages/Authentication/user-profile";

const authProtectedRoutes = [
  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "/", component: <Navigate to="/dashboard" /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/manage-users", component: <ManageUsers/> },
  { path: "/manage-category", component: <ManageCategory/> },
  { path: "/user-profile", component: <Userprofile/> },
  
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/register", component: <Register /> },

  //AuthenticationInner pages
  
];

export { authProtectedRoutes, publicRoutes };