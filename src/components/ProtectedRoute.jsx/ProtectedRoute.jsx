import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  isAuthenticated,
  children,
  isAdminRoute,
  isAdmin,
  redirect = "/login",
  redirectAdmin = "/profile",
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirect} />;
  }

  if (isAdminRoute && !isAdmin) {
    return <Navigate to={redirectAdmin} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
