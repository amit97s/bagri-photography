import React from "react";
import Aboutuscss from "./Aboutus.css";
import wedding from "../assets/iaw.jpg";

const Aboutus = () => {
  return (
    <div className="Aboutus">
      <div className="submain">
        <div className="submain-left">
          <img
            src={wedding}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
        </div>
        <div className="submain-right">
          <h1>
            <a
              href="#"
              style={{
                margin: "10px ",
                color: "green",
                fontWeight: "600",
                fontSize: "30px",
              }}
            >
              About me
            </a>
          </h1>
          <p>
            Introducing myself to strangers through my lens is a dance of
            connection <br />
            and perception. I approach each encounter as an opportunity to
            unveil the extraordinary in the ordinary.
            <br /> With a camera in hand, I become a silent observer, capturing
            the nuances of emotion and character. Through genuine curiosity
            <br /> and a keen eye, I seek to showcase the beauty in every
            person, creating images that transcend the visual and resonate on a
            deeply human level.
            <br /> By engaging in authentic interactions, <br />I aim to
            establish a rapport that goes beyond the surface. It's not just
            about taking pictures; it's about capturing moments that echo the
            shared
            <br /> experiences of our humanity. My photography is a testament to
            the stories untold, leaving an unforgettable imprint on the
            <br /> minds of those who view my work—a visual symphony that
            lingers, connecting us through the
            <br /> universal language of emotion and narrative.
          </p>
          <span
            style={{
              float: "right",
              margin: "10px ",
              color: "green",
              fontWeight: "600",
            }}
          >
            Bajrang Bairagi.......
          </span>
        </div>
      </div>
      <div className="slider"></div>
      <div className="contact-me ">
        <span style={{ fontFamily: "monospace" }}>Contact me</span>
      </div>
    </div>
  );
};

export default Aboutus;
