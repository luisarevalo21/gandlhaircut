import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ImageComponent from "../ImageComponent/ImageComponent";
import classes from "./ShowcaseComponent.module.css";
import showcase1 from "../../assets/images/Showcase_Photos/IMG_0605.JPG";
import showcase2 from "../../assets/images/Showcase_Photos/IMG_0606.JPG";
import showcase3 from "../../assets/images/Showcase_Photos/IMG_0619.JPG";

const showcaseComponent = props => (
  <div className={classes.Showcase}>
    <h3>Our Work</h3>

    <div className={classes.CarouselLayout}>
      <Carousel className={classes.Carousel}>
        <Carousel.Item
        // className={classes.carouselItem}
        // style={{ height: "500px", overflow: "hidden", width: "100%" }}
        >
          <ImageComponent image={showcase1} />
        </Carousel.Item>
        <Carousel.Item
        // className={classes.carouselItem}
        // style={{ height: "500px", overflow: "hidden", width: "100%" }}
        >
          <ImageComponent image={showcase2} />
        </Carousel.Item>
      </Carousel>
      <Carousel className={classes.Carousel}>
        <Carousel.Item
        // className={classes.carouselItem}
        // style={{ height: "500px", overflow: "hidden", width: "100%" }}
        >
          <ImageComponent image={showcase3} />
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
);

export default showcaseComponent;
