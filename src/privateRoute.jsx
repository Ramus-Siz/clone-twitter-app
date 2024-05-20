import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./authContext";

const PrivateRoute = () => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // or a spinner
  }

  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
