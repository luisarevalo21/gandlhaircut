import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import classes from "./PhotoSlideShow";
import image from "../../assets/images/IMG_8999.jpeg";
const photoSlideShow = props => {
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={image} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default photoSlideShow;
