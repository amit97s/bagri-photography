import React from "react";
import "./Footer.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import bimg35 from "../subassets/bagris images/_AJU3297.jpg";
import bimg36 from "../subassets/bagris images/_AJU3359.jpg";
import bimg37 from "../subassets/bagris images/_AJU3402.jpg";
import bimg38 from "../subassets/bagris images/_AJU5382.jpg";
import bimg39 from "../subassets/bagris images/_P0A1092.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-32 sm:mt-20">
      <div className="footer ">
        <div className="sections md:12">
          <img src={bimg36} alt="img1" />
        </div>
        <div className="sections">
          <img src={bimg37} alt="img1" />
        </div>
        <div className="sections">
          <img src={bimg38} alt="img1" />
        </div>
        <div className="sections">
          <img src={bimg39} alt="img1" />
        </div>
        {/* <div className="sections">
          <img src={img5} alt="img1" />
        </div>
        <div className="sections">
          <img src={img6} alt="img1" />
        </div> */}
      </div>

      <section className="bg-blue-600">
        <section className=" flex items-center justify-between px-5 py-14 mt-5">
          <div className="flex flex-col md:flex-row gap-4 items-center font-medium no-underline text-white">
            <div> Home</div>
            <div> About</div>
            <div> Investment</div>
            <div> Portfolio</div>
            <div> Client</div>
            <div> Contact</div>
          </div>
          <div className="flex gap-3 items-center text-white">
            <FaFacebook size={25} className="hover:text-blue-700" />
            <FaInstagram
              size={25}
              className="hover:text-pink-500"
              onClick={() =>
                navigate(
                  window.open(
                    "https://www.instagram.com/bajrang_bagri_photography/"
                  )
                )
              }
            />

            <FaXTwitter size={25} className="hover:text-black" />
          </div>
        </section>
        <h1 className="text-center text-white text-base pb-5">
          All content is copyright &copy; 2024 TH amit manral
        </h1>
      </section>
    </div>
  );
};

export default Footer;
