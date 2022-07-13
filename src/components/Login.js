import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "../react-redux-hooks";
import { startLogin } from "../actions/auth";
import { auth } from "../../src/firebase/firebase";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Dispatch
  const dispatch = useDispatch();

  // Start Login
  const beginLogin = () => {
    dispatch(startLogin());
  };

  // Check Login Status
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User is signed in");
        if (location.pathname === "/login") {
          navigate("/dashboard");
        }
      }
    });
  }, [auth]);

  return (
    <div>
      <button onClick={beginLogin}>Login</button>
    </div>
  );
};

export default Login;
