import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  //   const { user } = useAuth();
  // const user = null;
  const { user } = useSelector((state) => state.user);

  return user == null ? children : <Navigate to="/" />;
};

export default PublicRoute;
