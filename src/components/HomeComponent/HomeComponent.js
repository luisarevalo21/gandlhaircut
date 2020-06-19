import React, { Component } from "react";
import homeImage from "../../assets/images/Home_Photos/home1.jpg";
// import image from "../../assets/images/IMG_8999.jpeg";
// import Logo from "../../assets/images/Home_Photos/LogoGL.png";
import classes from "./HomeComponent.module.css";
// import Zoom from "react-reveal/Zoom"; // Importing Zoom effect
import Slide from "react-reveal/Slide";
// import Fade from "react-reveal/Fade";
import "./HomeComponent.module.css";
import PhotoSlideShow from "../PhotoSlideShow/PhotoSlideShow";
import InsideComponent from "../InsideComponent/InsideComponent";
import ShowcaseComponent from "../ShowcaseComponent/ShowcaseComponent";
// import homeImage from "../../assets/images/Home_Photos/home1.jpg";
import Announcement from "../Announcement/Announcement";
class HomeComponent extends Component {
  state = {};

  render() {
    return (
      <div>
        <Announcement />
        {/* <Zoom> */}
        <div className={classes.Container}>
          <img src={homeImage} alt=""></img>
          <div className={classes.text}>
            <h4>Welcome to G & L Haircut</h4>
          </div>
          {/* <img id='logo' src={Logo} alt='logo' style={{}}/> */}

          {/* <div className={classes.text}>
            <h4>Welcome to G & L Haircuts</h4>
          </div> */}
        </div>
        {/* </Zoom> */}

        {/* <Zoom> */}
        <div className={classes.AboutInfo}>
          <Slide duration={2000} left>
            <div className={classes.AboutText}>
              <h2>About Us</h2>
              <br></br>
              <p>
                G & L Haircut has been a family owned salon and established in
                El Sobrante for 16+ years.
              </p>
              <br></br>
              <p>
                We take pride in our work and do our best to make you look your
                best. <br />
                We strive for the highest quality of service, while maintaining
                a fun, friendly, non-pretentious environment.
              </p>
              <br></br>
              <p>We look forward to your visit!</p>
            </div>
          </Slide>

          {/* <img src="https://drive.google.com/open?id=1gwO7Nwu_n6LcA8qYBTP2FtQ3cEns7ccb" /> */}
          {/* <Slide duration={2000} right delay={1000}> */}
          <PhotoSlideShow />
          {/* </Slide> */}
          {/* <img src={homeImage} /> */}
        </div>
        <InsideComponent />

        <ShowcaseComponent />

        {/* </Zoom> */}

        {/* <Fade bottom delay={1500}> */}
        {/* <PhotoSlideShow /> */}
        {/* </Fade> */}
      </div>
    );
  }
}

export default HomeComponent;
