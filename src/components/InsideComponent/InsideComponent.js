import React from "react";
// import PhotoSlideShow from "../PhotoSlideShow/PhotoSlideShow";
import Carousel from "react-bootstrap/Carousel";
import ImageComponent from "../ImageComponent/ImageComponent";
import InsideImage1 from "../../assets/images/Inside_Photos/Inside1.jpg";
import InsideImage2 from "../../assets/images/Inside_Photos/Inside2.jpg";
import InsideImage3 from "../../assets/images/Inside_Photos/Inside3.jpg";

import classes from "./InsideComponent.module.css";

import Slide from "react-reveal/Slide";

const insideComponent = (props) => (
  <div className={classes.InsideMain}>
    <Slide left duration={2000} delay={2000}>
      <h3>Inside Our Salon</h3>
    </Slide>

    <Carousel>
      <Carousel.Item>
        <ImageComponent image={InsideImage1} />
      </Carousel.Item>
      <Carousel.Item>
        <ImageComponent image={InsideImage2} />
      </Carousel.Item>
      <Carousel.Item>
        <ImageComponent image={InsideImage3} />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default insideComponent;
