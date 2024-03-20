import React from "react";
import "./Aboutus.css";
import bimg12 from "../subassets/bagris images/_AJU0115 2.jpg";
import bimg13 from "../subassets/bagris images/_AJU0115.jpg";
import bimg14 from "../subassets/bagris images/_AJU0164.jpg";
import bimg15 from "../subassets/bagris images/_AJU0204.jpg";
import bimg16 from "../subassets/bagris images/_AJU0207.jpg";
import bimg17 from "../subassets/bagris images/_AJU0212.jpg";
import bimg18 from "../subassets/bagris images/_AJU0213.jpg";
import bimg19 from "../subassets/bagris images/_AJU0240-2.jpg";
import bimg20 from "../subassets/bagris images/_AJU0240.jpg";
import bimg21 from "../subassets/bagris images/_AJU0440.jpg";
import bimg22 from "../subassets/bagris images/_AJU0463.jpg";
import bimg23 from "../subassets/bagris images/_AJU0468.jpg";
import bimg24 from "../subassets/bagris images/_AJU0756 2.jpg";
import bimg25 from "../subassets/bagris images/_AJU0756.jpg";
import bimg26 from "../subassets/bagris images/_AJU0803.jpg";
import bimg27 from "../subassets/bagris images/_AJU0863.jpg";
import bimg28 from "../subassets/bagris images/_AJU1284.jpg";
import bimg29 from "../subassets/bagris images/_AJU1479.jpg";
import bimg30 from "../subassets/bagris images/_AJU1481.jpg";
import bimg31 from "../subassets/bagris images/_AJU1560.jpg";
import bimg32 from "../subassets/bagris images/_AJU1574.jpg";
import bimg33 from "../subassets/bagris images/_AJU2659.jpg";
import bimg34 from "../subassets/bagris images/_AJU3218.jpg";

import wedding from "../assets/iaw.jpg";

const Aboutus = () => {
  return (
    <>
      <main className="flex justify-center flex-col md:flex-row items-center  px-10 gap-5 md:gap-32 mt-10">
        <section>
          <img src={wedding} alt="weeding" className="h-[34rem]" />
        </section>
        <section className="w-full sm:w-[30rem] py-4 px-4 rounded-md">
          <h1 className="underline text-green-600 py-1">About Me</h1>
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

          <p className="text-green-600 text-end">Bajrang Bairagi.......</p>
        </section>
      </main>

      <div className="slider">
        <img src={bimg19} className="sliderimg" />
      </div>
      <div className="contact-me ">
        <span style={{ fontFamily: "monospace" }}>Contact me</span>
      </div>
    </>
  );
};

export default Aboutus;
