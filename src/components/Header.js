import React from "react";
import { NavLink } from "react-router-dom";

// Header
const Header = () => (
  <header>
    <h1>Budget App</h1>
    <NavLink to={"/"}>Home</NavLink> &nbsp;
    <NavLink to={"/create"}>Add Expense</NavLink> &nbsp;    
    <NavLink to={"/help"}>Help</NavLink> <br />
  </header>
);

export default Header;
