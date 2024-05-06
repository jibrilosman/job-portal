import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/HireKey.jpg";
import "./nav.css";
import "../../index.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    
  return (
    <>
      <nav className={showMenu ? 'mobile-menu' : 'mobile-menu-icon'}>
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/continue" className="nav-link">
          Login
        </NavLink>
      </nav>
      <Link
        to={({ isActive }) => (isActive ? "active" : "")}
        onClick={toggleMenu}
      >
        {<RxHamburgerMenu className="icon" />}
      </Link>
    </>
  );
};

export default Nav;
