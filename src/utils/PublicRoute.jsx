import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  //   const { user } = useAuth();
  const user = null;
  return user?.email == null ? children : <Navigate to="/" />;
};

export default PublicRoute;