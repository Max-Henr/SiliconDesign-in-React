import Logo from "./assets/logo.svg";
import "./NavBar.css";
import PrimaryButton from "../buttons/primarybutton/PrimaryButton";
import ToggleSwitch from "../buttons/toggleswitch/ToggleSwitch";
import { NavLink, Link } from "react-router-dom";

function NavBar({ toggleDarkMode }) {
  return (
    <div className="container header-main">
      <a className="silicon-logo" href="index.html">
        <img src={Logo} alt="silicon logo" />
        <span>Silicon</span>
      </a>
      <nav id="nav-menu" className="navbar">
        <Link to="/">Features</Link>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <ToggleSwitch toggleDarkMode={toggleDarkMode} />
      <PrimaryButton btnText="Sign in / up" btnIcon={"fa-regular fa-user"} />
      <button className="btn-mobile-menu">
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
}
export default NavBar;
