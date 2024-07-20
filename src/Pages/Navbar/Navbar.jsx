import React, { useState } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navBar">
          <div className="logo">
            {window.innerWidth > 769 ? (
              <img src="images/IEEE_MACE_SB_clr.png" alt="Mace Logo" />
            ) : (
              <img src="images/IEEE_MACE_SB_clr_small.png" alt="Mace Logo" />
            )}
          </div>
          <FaBars
            className="bars"
            onClick={() => {
              setActive(!active);
            }}
          />
        </div>
        <ul className={`nav-bar ${active ? "nav-bar-active" : ""}`}>
          <li><a href="#">HOME</a></li>
          <li><a href="#About">ABOUT US</a></li>
          <li><a href="#Event">EVENTS</a></li>
          <li><a href="#Gallery">GALLERY</a></li>
          <li><a href="#Chapters">CHAPTERS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </>
  );
}
