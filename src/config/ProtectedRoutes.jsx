import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

const ProtectedRoutesDashboard = () => {
  const { isadminLogin } = useSelector((selector) => selector.hotel);
  return isadminLogin ? <Outlet /> : <Navigate to="/login" />;
};
const ProtectedRoutesUser = () => {
  const { isUserLogin } = useSelector((selector) => selector.hotel);
  return isUserLogin ? <Outlet /> : <Navigate to="/" />;
};

export  {ProtectedRoutesDashboard,ProtectedRoutesUser};
