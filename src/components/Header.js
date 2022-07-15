import React, { useEffect } from "react";
import { startLogout } from "../actions/auth";
import { useDispatch } from "../react-redux-hooks";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { auth } from "../../src/firebase/firebase";

// Header
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Start Logout
  const beginLogout = () => {
    dispatch(startLogout());
  };

  // Check Login Status
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        console.log("User is currently logged out");
        navigate("/login");
      }
    });
  }, [auth]);

  // Check Log Status
  const logStatus = !!auth.currentUser;

  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to={"/dashboard"}>
            <h1>Budget</h1>
          </Link>{" "}
          &nbsp;
          {logStatus ? (
            <button className="button button__link" onClick={beginLogout}>Logout</button>
          ) : undefined}
        </div>
      </div>
    </header>
  );
};

export default Header;
