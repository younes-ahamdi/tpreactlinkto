import React, { useState } from "react";
import "./Navbar.styles.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import userImg from "../../../assets/images/logotime.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav>

      <div className="logo">
        <img className="logo-img-img" src={userImg} alt="" />
        time<span>Control</span>
      </div>
      <div
        className="hamburger"
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      {navOpen && (
        <div
          className="nav-box"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <div className="nav-list-box">
            <Link className="nav-list-item-ham" to="/">
              Home
            </Link>
            <Link className="nav-list-item-ham" to="/dashboard">
              Dashboard
            </Link>
            
            
          </div>
        </div>
      )}

      <div className="nav-list">
        <Link className="nav-list-item" to="/">
          Home
        </Link>
        <Link className="nav-list-item" to="/dashboard">
          Dashboard
        </Link>
        
        
      </div>

     
    </nav>
  );
};

export default Navbar;
