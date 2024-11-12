import Logo from "./assets/logo.svg";
import "./NavBar.css";
import PrimaryButton from "../buttons/primarybutton/PrimaryButton";
import ToggleSwitch from "../buttons/toggleswitch/ToggleSwitch";
import { NavLink, Link } from "react-router-dom";
import React, { useState } from "react";
import Hamburger from "hamburger-react";

function NavBar({ toggleDarkMode, toggleMenu }) {
  return (
    <div className="navbar-wrapper">
      <div className="container header-main">
        <a className="silicon-logo" href="/">
          <img src={Logo} alt="silicon logo" />
          <span>Silicon</span>
        </a>
        <nav id="nav-menu" className="navbar">
          <Link to="/">Features</Link>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <ToggleSwitch toggleDarkMode={toggleDarkMode} />
        <button className="signin-btn">
          <PrimaryButton
            btnText="Sign in / up"
            btnIcon={"fa-regular fa-user"}
            customClass="desktop-signin"
          />
        </button>
        <button onClick={toggleMenu} className="btn-mobile-menu">
          <Hamburger />
        </button>
      </div>
    </div>
  );
}
export default NavBar;
