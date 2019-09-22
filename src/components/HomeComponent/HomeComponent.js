import React, { Component } from "react";
import image from "../../assets/images/IMG_8999.jpeg";
import classes from "./HomeComponent.module.css";

import PhotoSlideShow from "../PhotoSlideShow/PhotoSlideShow";
class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className={classes.Container}>
          <img src={image}></img>

          <div className={classes.text}>
            <h4>Welcome to G & L Haircuts</h4>
          </div>
        </div>

        <div className={classes.AboutInfo}>
          <div className={classes.AboutText}>
            <h3>About Us</h3>
            <p>Family owned salonist for 17+ years</p>
            <p>
              We take pride in our work and do our best to make you look your
              best
            </p>
            <p>
              We strive for the highest quality of service, while maintaining a
              fun, friendly, non-pretentious environment.
            </p>
            <p>We look forward to your visit!</p>
          </div>

          <img src={image} />
        </div>

        <PhotoSlideShow />
      </div>
    );
  }
}

export default HomeComponent;
