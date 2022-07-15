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
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Budget</h1>
        <p>Keeping track of your expenses</p>
        <button className="login-button" onClick={beginLogin}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
