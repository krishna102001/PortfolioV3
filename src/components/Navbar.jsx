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
          {/* <li className="navbar--middle-item">
            <a href="#About">About</a>
          </li> */}
          <li className="navbar--middle-item">
            <a href="#Projects">Projects</a>
          </li>
          <li className="navbar--middle-item">
            <a href="/contact">Contact</a>
          </li>
          <li className="navbar--middle-item">
            <a href="/blog">Blogs</a>
          </li>
          <li className="navbar--middle-item">
            <a href="https://drive.google.com/file/d/1N-Z6In-hezR-u04z_cs7R75kU5JXvc5m/view?usp=sharing" target="_blank">
              <i className="fa-solid fa-download navbar--last-resume"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
