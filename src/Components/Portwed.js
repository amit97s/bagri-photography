import React from "react";
import Portwedcss from "./Portwed.css";
import bimg22 from "../subassets/bagris images/_AJU0463.jpg";
import bimg23 from "../subassets/bagris images/_AJU0468.jpg";
import bimg24 from "../subassets/bagris images/_AJU0756 2.jpg";
import bimg25 from "../subassets/bagris images/_AJU0756.jpg";
import bimg26 from "../subassets/bagris images/_AJU0803.jpg";
import bimg27 from "../subassets/bagris images/_AJU0863.jpg";
import { Carousel } from "react-bootstrap";

import bimg11 from "../subassets/bagris images/_AJU0109.jpg";
import bimg1 from "../subassets/bagris images/_AJU0014.jpg";
import bimg2 from "../subassets/bagris images/_AJU0038.jpg";

const Portwed = () => {
  return (
    <div className="Portwed">
      <div className="">
        <Carousel interval={2000}>
          <Carousel.Item>
            <img
              className="d-block w-100 h-full"
              src={bimg11}
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
      <div className="slide-content">
        <p>
          "In the dance of love, the wedding day is the exquisite choreography
          where two hearts synchronize, creating a symphony of vows, laughter,
          and shared dreams – a moment when every glance speaks volumes, and
          every promise is etched into the fabric of forever."
        </p>
      </div>
    </div>
  );
};

export default Portwed;
