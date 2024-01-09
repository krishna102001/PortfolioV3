import React, { useState } from "react";
import "../main.css";
import MenuIcon from "@mui/icons-material/Menu";
export function Navbar() {
  const [navToggle, setNavToggle] = useState(false);
  function toggle() {
    setNavToggle(!navToggle);
    // console.log(navToggle)
  }
  return (
    <nav className="navbar">
      <h1 className="logo">
        <a href="/" className="logo--item">
          KRISHNA
        </a>
      </h1>
      <div className="menu" onClick={toggle}>
        <MenuIcon></MenuIcon>
      </div>
      <div className="nav-toggle" style={{ display: navToggle && "block" }}>
        <ul className="navbar--middle">
          <li className="navbar--middle-item">
            <a href="#About">About</a>
          </li>
          <li className="navbar--middle-item">
            <a href="#Projects">Projects</a>
          </li>
          <li className="navbar--middle-item">
            <a href="#Achievements">Achievements</a>
          </li>
          <li className="navbar--middle-item">
            <a href="#Blog">Blogs</a>
          </li>
          <li className="navbar--middle-item">
            <a href="/">
              <i className="fa-solid fa-download navbar--last-resume"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
