import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import signature from "../assets/signature.png";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
    // setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="md:hidden flex items-center justify-between p-3">
        <img src={signature} alt="logo" className="w-44 md:hidden" />
        <section
          className="md:hidden flex items-center text-lg cursor-pointer z-[1000]"
          onClick={toggleMenu}
        >
          {toggle ? <RiMenu3Line /> : <IoClose />}
        </section>
      </div>
      <main
        className={` absolute top-0 left-0 md:relative flex flex-col md:flex-row items-center justify-between py-2 px-10 bg-white w-full  shadow-lg rounded-b-lg md:top-0  md:bg-white md:shadow-none md:rounded-b-none ${
          toggle ? "hidden" : ""
        } `}
      >
        <section
          className={`flex flex-col md:flex-row items-center gap-3 md:gap-10 `}
        >
          <NavLink to="/" className="no-underline text-black">
            Home
          </NavLink>
          <NavLink to="/about" className="no-underline text-black">
            About
          </NavLink>
        </section>
        <section className="hidden md:flex">
          <img src={signature} alt="logo" className="w-44 " />
        </section>
        <section className="flex flex-col md:flex-row items-center gap-3 md:gap-10">
          <NavLink
            to="/portfolio"
            className="relative group no-underline text-black"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            Portfolio
            {isMenuOpen && (
              <div className="absolute top-full -left-10  bg-white border border-gray-200 rounded-md px-4 py-2 shadow-md z-[999]">
                <ul className="list-none no-underline flex flex-col items-center justify-center">
                  <li>
                    <NavLink to="/wedding" className="no-underline text-black ">
                      Weddings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/engagements"
                      className="no-underline text-black"
                    >
                      Engagements
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/freelance"
                      className="no-underline text-black"
                    >
                      Freelance
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </NavLink>
          <NavLink to="/contact" className="no-underline text-black">
            Contact
          </NavLink>
        </section>
      </main>
    </>
  );
};

export default Header;
