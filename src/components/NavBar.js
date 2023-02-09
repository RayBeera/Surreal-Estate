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
        <li> <Link to="/">View properties</Link></li>
        <li>  <Link to="/add-property">Add property</Link> </li>
      </ul>
    </div>
  );
};

export default NavBar;

