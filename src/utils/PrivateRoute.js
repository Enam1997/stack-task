// import React from "react";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const user = "enam";

//   return user?.email ? children : <Navigate to="/signup" />;
// };

// export default PrivateRoute;

import { Navigate } from "react-router-dom";
export const PrivateRoute = ({children}) => {
  const user = "Enam";
  if (!user) {
    return <Navigate to="/signup" />;
  }

  return children;
};
