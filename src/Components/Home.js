import React, { useCallback, useEffect, useState } from "react";
import "./Home.css";
// import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import img1 from "../assets/1.jpg";
// import img2 from "../assets/2.jpg";
// import img3 from "../assets/3.jpg";
// import bimg from "../subassets/bagris images/VISH3333.jpg";
// import bimg0 from "../subassets/bagris images/_AJU0011.jpg";
// import bimg1 from "../subassets/bagris images/_AJU0014.jpg";
// import bimg2 from "../subassets/bagris images/_AJU0038.jpg";
// import bimg3 from "../subassets/bagris images/_AJU0056-2.jpg";
// import bimg4 from "../subassets/bagris images/_AJU0059.jpg";
// import bimg5 from "../subassets/bagris images/_AJU0071-2.jpg";
// import bimg6 from "../subassets/bagris images/_AJU0071-2.jpg";
// import bimg7 from "../subassets/bagris images/_AJU0079.jpg";
// import bimg8 from "../subassets/bagris images/_AJU0100.jpg";
// import bimg9 from "../subassets/bagris images/_AJU0105.jpg";
import bimg11 from "../subassets/bagris images/_AJU0109.jpg";
import bimg12 from "../subassets/bagris images/_AJU0115 2.jpg";
// import bimg13 from "../subassets/bagris images/_AJU0115.jpg";
import bimg14 from "../subassets/bagris images/_AJU0164.jpg";
// import bimg15 from "../subassets/bagris images/_AJU0204.jpg";
// import bimg16 from "../subassets/bagris images/_AJU0207.jpg";
import bimg17 from "../subassets/bagris images/_AJU0212.jpg";
// import bimg18 from "../subassets/bagris images/_AJU0213.jpg";
// import bimg19 from "../subassets/bagris images/_AJU0240-2.jpg";
// import bimg20 from "../subassets/bagris images/_AJU0240.jpg";
// import bimg21 from "../subassets/bagris images/_AJU0440.jpg";
// import bimg22 from "../subassets/bagris images/_AJU0463.jpg";
import bimg23 from "../subassets/bagris images/_AJU0468.jpg";
// import bimg24 from "../subassets/bagris images/_AJU0756 2.jpg";
// import bimg25 from "../subassets/bagris images/_AJU0756.jpg";
// import bimg26 from "../subassets/bagris images/_AJU0803.jpg";
// import bimg27 from "../subassets/bagris images/_AJU0863.jpg";
// import bimg28 from "../subassets/bagris images/_AJU1284.jpg";
// import bimg29 from "../subassets/bagris images/_AJU1479.jpg";
// import bimg30 from "../subassets/bagris images/_AJU1481.jpg";
// import bimg31 from "../subassets/bagris images/_AJU1560.jpg";
// import bimg32 from "../subassets/bagris images/_AJU1574.jpg";
// import bimg33 from "../subassets/bagris images/_AJU2659.jpg";
// import bimg34 from "../subassets/bagris images/_AJU3218.jpg";
// import bimg35 from "../subassets/bagris images/_AJU3297.jpg";
// import bimg36 from "../subassets/bagris images/_AJU3359.jpg";
// import bimg37 from "../subassets/bagris images/_AJU3402.jpg";
// import bimg38 from "../subassets/bagris images/_AJU5382.jpg";
// import bimg39 from "../subassets/bagris images/_P0A1092.jpg";
// import Portfolio from "./Portfolio";
// import Aboutus from "./Aboutus";
// import Portwed from "./Portwed";
// import Porteng from "./Porteng";
// import Contactus from "./Contactus";
// import Finalcontact from "./Finalcontact";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Activities from "./Activities";
const Home = () => {
  const images = [
    { name: "pic-1", src: bimg11 },
    { name: "pic-2", src: bimg12 },
    { name: "pic-3", src: bimg14 },
    { name: "pic-4", src: bimg23 },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide, handleNext, handlePrev]);
  return (
    <>
      <div className=" relative mx-auto overflow-hidden max-w-screen-xl -z-30">
        <div
          className=" w-full flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full select-none"
            >
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-60 sm:h-[30rem] object-cover -z-30"
              />
            </div>
          ))}
        </div>
        <IoIosArrowBack
          className="prev-button absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-color_gray  text-xl sm:text-2xl md:text-5xl"
          onClick={handlePrev}
        ></IoIosArrowBack>
        <IoIosArrowForward
          className="next-button absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-color_gray text-xl sm:text-2xl md:text-5xl"
          onClick={handleNext}
        ></IoIosArrowForward>
      </div>
      <div className="parents">
        ;
        <section className=" flex mt-10 flex-col md:flex-row justify-center items-center px-1 sm:px-20  gap-7 mb-20">
          <div>
            <h2 className="heading">
              Unveiling Timeless Stories Through My Lens
            </h2>
            <p className="paragraph">
              "Discover a visual journey beyond the ordinary at.
              <br />
              Our lens doesn't just freeze moments; it distills the very essence
              of emotions, weaving a tapestry of stories in every frame.
              <br /> Embrace the art of storytelling through captivating
              imagery,
              <br />
              where each photograph is a portal to a cherished memory. Join us
              in celebrating life's extraordinary moments,
              <br /> beautifully encapsulated in pixels. Welcome to a world
              where passion <br />
              meets precision, and each click is a timeless expression of the
              soul. Explore, experience, and let your story unfold
              <br /> in the enchanting gallery of Captured Essence".
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={bimg17}
              alt="img"
              className="w-[18rem] sm:w-[22rem] xl:w-[40rem] 2xl:w-[60rem] rounded-md object-cover"
            />
          </div>
        </section>
        <section className="flex flex-col items-center ">
          <div className="flex flex-col sm:flex-row">
            <div className="relative">
              <img
                src={bimg11}
                alt="img"
                className="w-full sm:w-60 md:w-80 lg:w-[30rem]"
                style={{ filter: "brightness(40%)" }}
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  outline-none border border-white px-2 py-1.5 bg-transparent text-white rounded-md hover:bg-white hover:text-black">
                view more
              </button>
            </div>

            <div className="relative">
              <img
                src={bimg12}
                alt="img"
                className="w-full sm:w-60 md:w-80 lg:w-[30rem]"
                style={{ filter: "brightness(40%)" }}
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  outline-none border border-white px-2 py-1.5 bg-transparent text-white rounded-md hover:bg-white hover:text-black">
                view more
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="relative">
              <img
                src={bimg14}
                alt="img"
                className="w-full sm:w-60 md:w-80 lg:w-[30rem]"
                style={{ filter: "brightness(40%)" }}
              />
              <button className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline-none border border-white px-2 py-1.5 bg-transparent text-white rounded-md hover:bg-white hover:text-black">
                view more
              </button>
            </div>
            <div className="relative">
              <img
                src={bimg23}
                alt="img"
                className="w-full sm:w-60 md:w-80 lg:w-[30rem]"
                style={{ filter: "brightness(40%)" }}
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  outline-none border border-white px-2 py-1.5 bg-transparent text-white rounded-md hover:bg-white hover:text-black">
                view more
              </button>
            </div>
          </div>
        </section>
        <div className="quote">
          <h2>
            "Through the lens of life, every moment is a masterpiece <br />
            waiting to be captured, painting the canvas
            <br /> of memories with the brushstrokes of light and shadow."
          </h2>
          <span className="span">-</span> <p>Roland Barthes</p>
        </div>
        <Activities />
        {/* <Header /> */}
        {/* <Home /> */}
        {/* <Portfolio /> */}
        {/* <Aboutus /> */}
        {/* <Portwed />/ */}
        {/* <Porteng /> */}
        {/* <Contactus /> */}
        {/* <Finalcontact /> */}
      </div>
    </>
  );
};

export default Home;

//
