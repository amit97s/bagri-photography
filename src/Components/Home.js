import React from "react";
import homecss from "./Home.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
const Home = () => {
  return (
    <div className="parents">
      <div className="Home">
        <Carousel interval={100000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1} // Replace with your image URL
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2} // Replace with your image URL
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3} // Replace with your image URL
              alt="Third slide"
            />
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
      <div className="child2">
        <div className="child2-left">
          <h2>Unveiling Timeless Stories Through My Lens</h2>
          <p>
            "Discover a visual journey beyond the ordinary at.
            <br />
            <img
            //   src={img}
            //   style={{ width: "100px", margin: "10px 0px 0px 0px" }}
            />
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
        <div className="child2-right"></div>
      </div>
      <div className="grid">
        <div className="grid1">
          <img
            src={
              "https://pics.craiyon.com/2023-06-21/19dfc7a611ea4caf9356a83770a834a8.webp"
            }
          />
        </div>
        <div className="grid1">
          <img
            src={
              "https://i.pinimg.com/564x/a2/97/64/a2976488280f2552783e63fc73957cff.jpg"
            }
          />
        </div>
        <div className="grid1">
          <img
            src={
              "https://i.pinimg.com/564x/6f/0a/7a/6f0a7a8c3490fa3f9782be268047d6cb.jpg"
            }
          />
        </div>
      </div>
      <div className="quote">
        <h2>
          "Through the lens of life, every moment is a masterpiece <br />
          waiting to be captured, painting the canvas
          <br /> of memories with the brushstrokes of light and shadow."
        </h2>
        <span className="span">-</span> <p>Roland Barthes</p>
      </div>
    </div>
  );
};

export default Home;
