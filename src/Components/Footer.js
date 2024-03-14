import React from "react";
import footercss from "./Footer.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="sections">
          <img src={img1} alt="img1" />
        </div>
        <div className="sections">
          <img src={img2} alt="img1" />
        </div>
        <div className="sections">
          <img src={img3} alt="img1" />
        </div>
        <div className="sections">
          <img src={img4} alt="img1" />
        </div>
        <div className="sections">
          <img src={img5} alt="img1" />
        </div>
        <div className="sections">
          <img src={img6} alt="img1" />
        </div>
      </div>
      <div className="bigie">
        <div className="bigie-center">
          <div className="social-media">
            <i class="fa-brands fa-facebook"></i>
            <a href="https://www.instagram.com/bajrang_bagri_photography/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div className="navbar2">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Investment</li>
              <li>Portfolio</li>
              <li>Client</li>
              <li>Contact</li>
            </ul>
          </div>
          <p>All content Copyright © 2024 TH amit manral</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
