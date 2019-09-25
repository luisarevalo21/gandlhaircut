import React from "react";
import Carousel from "react-bootstrap/Carousel";
import classes from "./PhotoSlideShow";
import image from "../../assets/images/IMG_8999.jpeg";
import AboutImage1 from "../../assets/images/About_Photos/AboutImage1.jpg";
import AboutImage2 from "../../assets/images/About_Photos/AboutImage2.jpg";
import AboutImage3 from "../../assets/images/About_Photos/AboutImage3.jpg";

import ImageComponent from "../ImageComponent/ImageComponent";

const photoSlideShow = props => {
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <Carousel>
        <Carousel.Item>
          <ImageComponent image={AboutImage1} />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ImageComponent image={AboutImage2} />

          {/* // <img className="d-block w-100" src={image} alt="First slide" /> */}
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ImageComponent image={AboutImage3} />

          {/* // <img className="d-block w-100" src={image} alt="First slide" /> */}
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
