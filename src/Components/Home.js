import React from "react";
import homecss from "./Home.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import bimg from "../subassets/bagris images/VISH3333.jpg";
import bimg0 from "../subassets/bagris images/_AJU0011.jpg";
import bimg1 from "../subassets/bagris images/_AJU0014.jpg";
import bimg2 from "../subassets/bagris images/_AJU0038.jpg";
import bimg3 from "../subassets/bagris images/_AJU0056-2.jpg";
import bimg4 from "../subassets/bagris images/_AJU0059.jpg";
import bimg5 from "../subassets/bagris images/_AJU0071-2.jpg";
import bimg6 from "../subassets/bagris images/_AJU0071-2.jpg";
import bimg7 from "../subassets/bagris images/_AJU0079.jpg";
import bimg8 from "../subassets/bagris images/_AJU0100.jpg";
import bimg9 from "../subassets/bagris images/_AJU0105.jpg";
import bimg11 from "../subassets/bagris images/_AJU0109.jpg";
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
import bimg35 from "../subassets/bagris images/_AJU3297.jpg";
import bimg36 from "../subassets/bagris images/_AJU3359.jpg";
import bimg37 from "../subassets/bagris images/_AJU3402.jpg";
import bimg38 from "../subassets/bagris images/_AJU5382.jpg";
import bimg39 from "../subassets/bagris images/_P0A1092.jpg";
import Portfolio from "./Portfolio";
import Aboutus from "./Aboutus";
import Portwed from "./Portwed";
import Porteng from "./Porteng";
import Contactus from "./Contactus";
import Finalcontact from "./Finalcontact";
const Home = () => {
  const img = [
    {
      src: "https://pics.craiyon.com/2023-06-21/19dfc7a611ea4caf9356a83770a834a8.webp",
      alt: "img1",
    },
    {
      src: "https://i.pinimg.com/564x/a2/97/64/a2976488280f2552783e63fc73957cff.jpg",
      alt: "img1",
    },
    {
      src: "https://i.pinimg.com/564x/6f/0a/7a/6f0a7a8c3490fa3f9782be268047d6cb.jpg",
      alt: "img1",
    },
  ];

  return (
    <div className="parents">
      <div className="Home">
        <Carousel interval={2000}>
          <Carousel.Item>
            <img
              className="d-block w-100 h-full"
              src={bimg9}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" d-block w-100" src={bimg2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={bimg1} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      ;
      <section className=" flex mt-10 flex-col md:flex-row justify-center items-center px-4 sm:px-20  gap-7 mb-20">
        <div>
          <h2 className="heading">
            Unveiling Timeless Stories Through My Lens
          </h2>
          <p className="paragraph">
            "Discover a visual journey beyond the ordinary at.
            <br />
            Our lens doesn't just freeze moments; it distills the very essence
            of emotions, weaving a tapestry of stories in every frame.
            <br /> Embrace the art of storytelling through captivating imagery,
            <br />
            where each photograph is a portal to a cherished memory. Join us in
            celebrating life's extraordinary moments,
            <br /> beautifully encapsulated in pixels. Welcome to a world where
            passion <br />
            meets precision, and each click is a timeless expression of the
            soul. Explore, experience, and let your story unfold
            <br /> in the enchanting gallery of Captured Essence".
          </p>
        </div>

        <div>
          <img
            src="https://images-pw.pixieset.com/sample_photos/sample-170_XL.jpg"
            alt="img"
            className="w-[40rem] xl:w-[40rem] 2xl:w-[60rem] rounded-md object-contain"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center m-3 w-450:flex-row m w-450:m-20 overflow-hidden ">
        {img?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex m-1 sm:m-4  duration-150 border-2 overflow-hidden mt-10 "
            >
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover  w-[40rem] h-44 md:w-[30rem] md:h-80 md:hover:scale-125 duration-200 "
              />
            </div>
          );
        })}
      </section>
      <div className="quote">
        <h2>
          "Through the lens of life, every moment is a masterpiece <br />
          waiting to be captured, painting the canvas
          <br /> of memories with the brushstrokes of light and shadow."
        </h2>
        <span className="span">-</span> <p>Roland Barthes</p>
      </div>
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Portfolio /> */}
      {/* <Aboutus /> */}
      {/* <Portwed />/ */}
      {/* <Porteng /> */}
      {/* <Contactus /> */}
      {/* <Finalcontact /> */}
    </div>
  );
};

export default Home;

//
