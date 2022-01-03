import React from "react";
import { greeting } from "../../portfolio";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <header className="header navbar">
        <a href="/" className="logo">
          <span className="logo-name">{greeting.name}</span>
        </a>
        <ul className="menu">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
