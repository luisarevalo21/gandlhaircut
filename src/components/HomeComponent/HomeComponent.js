import React, { Component } from "react";
import homeImage from "../../assets/images/Home_Photos/home1.jpg";
import classes from "./HomeComponent.module.css";
import Zoom from "react-reveal/Zoom"; // Importing Zoom effect
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import PhotoSlideShow from "../PhotoSlideShow/PhotoSlideShow";
import InsideComponent from "../InsideComponent/InsideComponent";
class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <Zoom> */}
        <div className={classes.Container}>
          <img src={homeImage}></img>

          <div className={classes.text}>
            <h4>Welcome to G & L Haircut</h4>
          </div>
        </div>
        {/* </Zoom> */}

        {/* <Zoom> */}
        <div className={classes.AboutInfo}>
          <Slide duration={2000} left>
            <div className={classes.AboutText}>
              <h3>About Us</h3>
              <p>Family owned salonist for 17+ years</p>
              <p>
                We take pride in our work and do our best to make you look your
                best
              </p>
              <p>
                We strive for the highest quality of service, while maintaining
                a fun, friendly, non-pretentious environment.
              </p>
              <p>We look forward to your visit!</p>
            </div>
          </Slide>

          <PhotoSlideShow />
          {/* <img src={homeImage} /> */}
        </div>
        <InsideComponent />

        {/* </Zoom> */}

        <Fade bottom delay={1500}>
          {/* <PhotoSlideShow /> */}
        </Fade>
      </div>
    );
  }
}

export default HomeComponent;
