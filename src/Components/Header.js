import React, { useState } from "react";
import "./Header.css";
import signature from "../assets/signature.png";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="Header">
      <div className="center">
        <div className="logo">
          <img src={signature} alt="" className="w-40" />
        </div>
        <div className="menu ">
          <ul
            style={{
              transform: isMenuOpen ? "translateY(150px)" : "translateY(0%)",
            }}
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="dropdown">
              <NavLink to={"/"}>Portfolio</NavLink>
              <ul className="downcontent">
                <li>
                  <NavLink to={"/wedding"}>Weddings</NavLink>
                </li>
                <li>
                  <NavLink to={"/engagements"}>Engagements</NavLink>
                </li>
                <li>
                  <NavLink to={"/freelance"}>Freelance</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={"bg-[#111111] text-white px-3 py-2 rounded"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div
          className="menu-toggle flex items-center text-xl z-10 cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IoClose /> : <RiMenu3Line />}
        </div>
      </div>
    </div>
  );
};

export default Header;
