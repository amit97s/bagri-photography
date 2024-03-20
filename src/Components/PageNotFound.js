import React from "react";
import Slider from "react-slick";

const PageNotFound = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Slider>
    </div>
  );
};

export default PageNotFound;
