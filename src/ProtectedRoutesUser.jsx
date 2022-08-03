import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function useAuth() {
  const roles = localStorage.getItem("roles");
  if (roles === "ROLE_ADMIN" || roles === "ROLE_USER") {
    return true;
  } else {
    return false;
  }
}

function ProtectedRoutesUser() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutesUser;
