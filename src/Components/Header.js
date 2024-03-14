import React from "react";
import css from "./Header.css";
import signature from "../assets/signature.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="center">
        <div className="logo">
          <img src={signature} alt="" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li className="dropdown">
              <a href="#">Portfolio</a>
              <ul className="downcontent">
                <li>
                  <a href="#">Wedding</a>
                </li>
                <li>
                  <a href="#">Engagement</a>
                </li>
                <li>
                  <a href="#">Freelance</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
