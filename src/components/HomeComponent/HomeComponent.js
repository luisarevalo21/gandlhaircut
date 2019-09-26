import React, { Component } from "react";
// import homeImage from "../../assets/images/Home_Photos/home1.jpg";
// import image from "../../assets/images/IMG_8999.jpeg";
import Logo from '../../assets/images/LogoGL.png';
import classes from "./HomeComponent.module.css";
// import Zoom from "react-reveal/Zoom"; // Importing Zoom effect
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import './HomeComponent.module.css';
import PhotoSlideShow from "../PhotoSlideShow/PhotoSlideShow";
import InsideComponent from "../InsideComponent/InsideComponent";

class HomeComponent extends Component {
  
  state = {};

  render() {
    return (
      <div>
        {/* <Zoom> */}
        <div id='logo' className={classes.Container}>
          <img  src={Logo} alt='logo' style={{}}/>

          {/* <div className={classes.text}>
            <h4>Welcome to G & L Haircuts</h4>
          </div> */}

        </div>
        {/* </Zoom> */}

        {/* <Zoom> */}
        <div className={classes.AboutInfo}>
          <Slide duration={2000} left>
            <div className={classes.AboutText}>
              <h2>About Us</h2><br></br>
              <p className='text-center'>G&L Haircut has been a Family owned Salon for 17+ years.</p><br></br>
              <p className='text-center'>
                We take pride in our work and do our best to make you look your
                best. We strive for the highest quality of service, while maintaining
                a fun, friendly, non-pretentious environment.
              </p><br></br>
              <p className='h4 text-center'>We look forward to your visit!</p>
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
