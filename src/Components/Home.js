import React from "react";
import homecss from "./Home.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
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
        <Carousel interval={100000}>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
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
      <section className="flex flex-col md:flex-row justify-center items-center px-20 gap-7 ">
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
            className="w-[40rem] 2xl:w-full rounded-md object-contain"
          />
        </div>
      </section>
      <section className="flex justify-center mt-10">
        {img?.map((item, index) => {
          return (
            <div key={index} className="flex ">
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover w-[30rem] h-80 "
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
