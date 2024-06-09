import React, { useState } from "react";
import "./navbar.css";
import MaceLogo from "../../assets/mace-white.svg";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navBar">
          <div className="logo">
            <img src={MaceLogo} alt="Mace Logo" />
          </div>
          <FaBars
            className="bars"
            onClick={() => {
              setActive(!active);
            }}
          />
        </div>
        <ul className={`nav-bar ${active ? "nav-bar-active" : ""}`}>
          <li>HOME</li>
          <li>WHY IEEE</li>
          <li>ABOUT US</li>
          <li>GALLERY</li>
          <li>CHAPTERS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </>
  );
}
