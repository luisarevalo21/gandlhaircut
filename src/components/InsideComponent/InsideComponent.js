import React from "react";
// import PhotoSlideShow from "../PhotoSlideShow/PhotoSlideShow";
import Carousel from "react-bootstrap/Carousel";
import ImageComponent from "../ImageComponent/ImageComponent";
import InsideImage1 from "../../assets/images/Inside_Photos/Inside1.jpg";
import InsideImage2 from "../../assets/images/Inside_Photos/Inside2.jpg";
import classes from "./InsideComponent.module.css";

const insideComponent = props => (
  <div className={classes.InsideMain}>
    <h3>Inside Our Salon</h3>
    <Carousel>
      <Carousel.Item>
        <ImageComponent image={InsideImage1} />
      </Carousel.Item>
      <Carousel.Item>
        <ImageComponent image={InsideImage2} />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default insideComponent;
