import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

function useAuth() {
  const username = { loggedIn: false };

  return username && username.loggedIn;
}

function ProtectedRoutes() {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}

export default ProtectedRoutes;
