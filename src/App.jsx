import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/users/Users";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import Projects from "./pages/projects/Projects";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.user);
  console.log("check the usere from app js")
  console.log(user);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/users"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      />
      <Route
        path="/projects"
        element={
          <PrivateRoute>
            <Projects/>
          </PrivateRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        }
      />
      <Route
        path="/signin"
        element={
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        }
      />
    </Routes>
  );
}

export default App;
