import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/home";
import Login from "../page/login";
import PrivateRoute from "./privateRoute";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
