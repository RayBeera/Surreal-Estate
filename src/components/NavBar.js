import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/navbar.css";


const NavBar = () => {
  return (
    <div className="NavBar">
      <img className="logo" src={logo} alt="logo" />
      <h2 className="nav-title">Surreal Estate</h2>
      <ul className="navbar-links-item">
        <li> <Link className="view-item" to="/"/> View Properties </li>
        <li> <Link className="add-item"to="/add-property" />Add a Property </li> 
      </ul>
    </div>
  );
};

export default NavBar;
