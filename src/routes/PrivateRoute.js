import React, { useEffect } from "react";
import Header from "../components/Header";
import { useSelector } from "../react-redux-hooks";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.uid);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);
  if (isAuthenticated) {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
};

export default PrivateRoute;
