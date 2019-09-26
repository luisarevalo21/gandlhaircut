import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import classes from "./PhotoSlideShow";
import image from "../../assets/images/IMG_8999.jpeg";
import AboutImage1 from "../../assets/images/About_Photos/AboutImage1Cropped.jpg";
import AboutImage2 from "../../assets/images/About_Photos/AboutImage2Cropped.jpg";
import AboutImage3 from "../../assets/images/About_Photos/AboutImage3Cropped.jpg";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import ImageComponent from "../ImageComponent/ImageComponent";
// import { Carousel } from "react-responsive-carousel";

const photoSlideShow = props => {
  return (
    <Carousel>
      <Carousel.Item
        style={{ height: "300px" }}
        // style={{ height: "300px", overflow: "hidden", width: "100%" }}
      >
        <ImageComponent image={AboutImage1} />
        {/* <img className="d-block w-100" src={AboutImage1} alt="First slide" /> */}
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item
        style={{ height: "300px" }}
        // style={{ height: "300px", overflow: "hidden", width: "100%" }}
      >
        <ImageComponent image={AboutImage2} />

        {/* <img className="d-block w-100" src={AboutImage2} alt="First slide" /> */}
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item
        style={{ height: "300px" }}
        // style={{ height: "300px", overflow: "hidden", width: "100%" }}
      >
        <ImageComponent image={AboutImage3} />

        {/* <img className="d-block w-100" src={AboutImage2} alt="First slide" /> */}
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    // </div>

    // <Carousel className={classes.Carousel}>
    //   <Carousel.Item>
    //     <ImageComponent image={AboutImage1} />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>

    //   <Carousel.Item>
    //     <ImageComponent image={AboutImage2} />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>

    //   <Carousel.Item>
    //     <ImageComponent image={AboutImage3} />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>

    /* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */
    /* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */
    // <Carousel
    //   infiniteLoop={true}
    //   showThumbs={false}
    //   className={classes.Carousel}
    // >
    //   <div>
    //     <img src={AboutImage3} className={classes.Image} />
    //     {/* <p className="legend">Legend 1</p> */}
    //   </div>
    //   <div>
    //     <img src={AboutImage2} />
    //     {/* <p className="legend">Legend 2</p> */}
    //   </div>
    //   <div>
    //     <img src={AboutImage1} />
    //     {/* <p className="legend">Legend 3</p> */}
    //   </div>
    // </Carousel>
    // <div style={{ width: "50%", margin: "0 auto" }}>
    //   <Carousel>
    //     <Carousel.Item>
    //       <ImageComponent image={AboutImage1} />

    //       <Carousel.Caption>
    //         <h3>First slide label</h3>
    //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>

    //     <Carousel.Item>
    //       <ImageComponent image={AboutImage2} />

    //       {/* // <img className="d-block w-100" src={image} alt="First slide" /> */}
    //       <Carousel.Caption>
    //         <h3>First slide label</h3>
    //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>

    //     <Carousel.Item>
    //       <ImageComponent image={AboutImage3} />

    //       {/* // <img className="d-block w-100" src={image} alt="First slide" /> */}
    //       <Carousel.Caption>
    //         <h3>First slide label</h3>
    //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //   </Carousel>
    // </div>
  );
};

export default photoSlideShow;
