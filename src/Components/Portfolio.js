import React from "react";
import portcss from "./Portfolio.css";
import images1 from "../assets/1.jpg";
import images2 from "../assets/2.jpg";
import images3 from "../assets/3.jpg";
import images4 from "../assets/4.jpg";
import images5 from "../assets/iaw.jpg";
import images11 from "../assets/bgimg.jpg";
import images6 from "../subassets/artwork-fantasy-art-concept-art-jungle-wallpaper-preview.jpg";
import images7 from "../subassets/bamboo-ecosystem-forest-green-wallpaper-preview.jpg";
import images8 from "../subassets/jungle-artwork-digital-art-fantasy-art-wallpaper-preview.jpg";
import images9 from "../subassets/nature-trees-forest-leaves-wallpaper-preview.jpg";
import images10 from "../subassets/shadow-of-the-tomb-raider-2018-puzzle-video-game-wallpaper-preview.jpg";
import images16 from "../subassets/trees-stairs-deep-forest-forest-wallpaper-preview.jpg";
import images13 from "../subassets/tropical-jungle-wallpaper-preview.jpg";
import images14 from "../subassets/wallpaper-background-jaguar-wildlife.jpg";

const Portfolio = () => {
  return (
    <div className="portfoliopage">
      <div className="portfolio-bio">
        <h1>portfolio</h1>
        <p>
          "Step into a world where every glance, every touch,
          <br /> every smile is a story waiting to be told. Welcome to my
          <br /> realm of wedding photography, where love is immortalized
          <br /> in every frame. With an artist's eye and a storyteller's heart,
          I capture the essence
          <br /> of your special day, weaving together moments of
          <br /> joy, laughter, and romance into a tapestry of memories. From
          <br /> intimate ceremonies to grand celebrations, my portfolio is a
          testament to the beauty of love in all its forms. Let me be your
          visual poet, crafting
          <br /> timeless images that will echo through generations, <br />
          preserving the magic of your love story forever."
        </p>
      </div>
      <div className="portfoliopage-center">
        <div className="portfoliopage-center-div">
          <div className="portfoliopage-center-div1">
            <img src={images1} />
          </div>
          <div className="portfoliopage-center-div1">
            <img src={images2} />
          </div>
        </div>
        <div className="portfoliopage-center-div">
          <div className="portfoliopage-center-div2">
            <img src={images3} />
          </div>
          <div className="portfoliopage-center-div2">
            <img src={images4} />
          </div>
          <div className="portfoliopage-center-div2">
            <img src={images5} />
          </div>
        </div>
        <div className="portfoliopage-center-div">
          <div className="portfoliopage-center-div31">
            <img src={images6} />
          </div>
          <div className="portfoliopage-center-div32">
            <img src={images7} />
          </div>
          <div className="portfoliopage-center-div33">
            <img src={images8} />
          </div>
        </div>
        <div className="portfoliopage-center-div">
          <div className="portfoliopage-center-div4">
            <img src={images9} />
          </div>
          <div className="portfoliopage-center-div4">
            <img src={images10} />
          </div>
          <div className="portfoliopage-center-div4">
            <img src={images11} />
          </div>
          <div className="portfoliopage-center-div4">
            <img src={images16} />
          </div>
        </div>
        <div className="portfoliopage-center-div">
          <div className="portfoliopage-center-div5">
            <img src={images13} />
          </div>
          <div className="portfoliopage-center-div5">
            <div className="portfoliopage-center-div5sub1">
              <img src={images14} />
            </div>
            <div className="portfoliopage-center-div5sub2">
              <img src={images11} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
