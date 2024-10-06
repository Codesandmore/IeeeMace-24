import React, { useState,useEffect } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [logoIndex, setLogoIndex] = useState(0);

  const logos = ["images/mace35_1.png", "images/mace35_2.png"]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndex((prevIndex) => (prevIndex === 0 ? 1 : 0)); 
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <nav className="navbar">
        <div className="navBar">
        <div className="logo">
            <img src={logos[logoIndex]} alt="Mace Logo" />
          </div>
          <FaBars
            className="bars"
            onClick={() => {
              setActive(!active);
            }}
          />
        </div>
        <ul className={`nav-bar ${active ? "nav-bar-active" : ""}`}>
          <li>
            <a
              href="#"
              onClick={() => {
                setActive(!active);
              }}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#About"
              onClick={() => {
                setActive(!active);
              }}
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              href="#Event"
              onClick={() => {
                setActive(!active);
              }}
            >
              EVENTS
            </a>
          </li>
          <li>
            <a
              href="#Gallery"
              onClick={() => {
                setActive(!active);
              }}
            >
              GALLERY
            </a>
          </li>
          <li>
            <a
              href="#Chapters"
              onClick={() => {
                setActive(!active);
              }}
            >
              CHAPTERS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                setActive(!active);
              }}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
