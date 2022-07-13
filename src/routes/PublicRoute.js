import React, { useEffect } from "react";

import { useSelector } from "../react-redux-hooks";
import { Outlet, useNavigate } from "react-router-dom";

const PublicRoute = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.uid);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, []);
  if (!isAuthenticated) {
    return <Outlet />;
  }
};

export default PublicRoute;
