import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = "Enam";

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default PrivateRoute;
