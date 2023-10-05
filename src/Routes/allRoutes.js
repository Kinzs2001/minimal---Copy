import React from "react";
import { Navigate } from "react-router-dom";

//AuthenticationInner pages

//login
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

//pages
import ManageCategory from "../pages/Authentication/ManageCategory";
import ManageUsers from "../pages/Authentication/ManageUsers";

const authProtectedRoutes = [
  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
  { path: "/manage-category", component: <ManageCategory/> },
  { path: "/manage-users", component: <ManageUsers/> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/register", component: <Register /> },

  //AuthenticationInner pages
  
];

export { authProtectedRoutes, publicRoutes };