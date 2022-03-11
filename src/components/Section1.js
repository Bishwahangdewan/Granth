import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slider1 from "../assests/slider1.jpg";
import slider2 from "../assests/slider2.jpg";
import slider3 from "../assests/slider3.jpg";
import slider4 from "../assests/slider4.jpg";

function Section1(props) {
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
      >
        <div>
          <img src={slider1} height="500px" width="100%" alt="" />
        </div>
        <div>
          <img src={slider2} height="500px" width="100%" alt="" />
        </div>
        <div>
          <img src={slider3} height="500px" width="100%" alt="" />
        </div>
        <div>
          <img src={slider4} height="500px" width="100%" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Section1;
