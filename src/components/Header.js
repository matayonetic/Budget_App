import React, { useEffect } from "react";
import { startLogout } from "../actions/auth";
import { useDispatch } from "../react-redux-hooks";
import { NavLink, useNavigate } from "react-router-dom";
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
    <header>
      <h1>Budget App</h1>
      <NavLink to={"/dashboard"}>Home</NavLink> &nbsp;
      <NavLink to={"/create"}>Add Expense</NavLink> &nbsp;
      <NavLink to={"/help"}>Help</NavLink> &nbsp;
      {logStatus ? <button onClick={beginLogout}>Logout</button> : undefined}
    </header>
  );
};

export default Header;
