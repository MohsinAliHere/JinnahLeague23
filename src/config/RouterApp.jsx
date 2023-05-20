import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
  redirect,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import {
  ProtectedRoutesDashboard,
  ProtectedRoutesUser,
} from "./ProtectedRoutes";

import Booking from "../pages/userPages/Booking/Booking";
import Profile from "../pages/userPages/Profile/Profile";
import HotelDetail from "../pages/userPages/HotelDetail/HotelDetail";
import CheckOut from "../pages/userPages/CheckOut/CheckOut";
import Review from "../pages/Review/Review";
const RouterApp = () => {
  return (
    <Router>
      {/* for active user routes */}
      <Routes>
        <Route element={<ProtectedRoutesUser />}>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/HotelDetail" element={<HotelDetail />} />
          <Route path="/CheckOut" element={<CheckOut />} />
        </Route>

        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/WriteaReview" element={<Review />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Create-Account" element={<SignUp />} />

        {/* for active admin routes */}
        <Route element={<ProtectedRoutesDashboard />}>
          <Route path="/*" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterApp;
