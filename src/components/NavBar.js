import React from "react";
import logo from "../images/logo.png";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <img className="logo" src={logo} alt="logo" />
      <h2 className="title">Surreal Estate</h2>
      <ul className="navbar-links-item">
        <li> <a href="" />View Properties  </li>
        <li> <a href=""  />Add a Property </li> 
      </ul>
    </div>
  );
};

export default NavBar;
