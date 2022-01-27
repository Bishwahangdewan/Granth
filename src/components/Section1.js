import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            height="500px"
            width="100%"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1561657819-51c0511e35ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            height="500px"
            width="100%"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            height="500px"
            width="100%"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1642543492366-a92039433543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            height="500px"
            width="100%"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            height="500px"
            width="100%"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            height="500px"
            width="100%"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Section1;
