import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
// import {Link} from 'react-router-dom';
import { HiOutlineMenuAlt1, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  return (
    <div className="main-navbar">
      <div className="head-name">
        <span>Rahul Shrestha</span>
      </div>

      <div className={showNavLinks ? "nav-responsive" : "navLinks"}>
        <ul>
          <li>
            <Link spy={true} smooth={true} duration={1000} to="Banner">
              Home
            </Link>
          </li>
          <li>
            <Link spy={true} smooth={true} duration={1000} to="About">
              About
            </Link>
          </li>
          <li>
            <Link spy={true} smooth={true} duration={1000} to="Portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link spy={true} smooth={true} duration={1000} to="Resume">
              Resume
            </Link>
          </li>
          <li>
            <Link spy={true} smooth={true} duration={1000} to="Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="hamburg-menu"
        onClick={() => setShowNavLinks(!showNavLinks)}
      >
        {showNavLinks ? (
          <HiOutlineX style={{ position: "fixed" }} />
        ) : (
          <HiOutlineMenuAlt1 />
        )}
      </div>
    </div>
  );
}

export default Navbar;
