import React from "react";
import "./Aboutus.css";
import wedding from "../assets/iaw.jpg";

const Aboutus = () => {
  return (
    <>
      <main className="flex justify-center flex-col md:flex-row items-center  px-10 gap-5 md:gap-32">
        <section>
          <img src={wedding} alt="weeding" className="h-[34rem]" />
        </section>
        <section className="w-full sm:w-[30rem] shadow-lg py-4 px-4 rounded-md">
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

      <div className="slider"></div>
      <div className="contact-me ">
        <span style={{ fontFamily: "monospace" }}>Contact me</span>
      </div>
    </>
  );
};

export default Aboutus;
