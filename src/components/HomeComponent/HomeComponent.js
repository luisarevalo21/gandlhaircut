import React, { Component } from "react";
import homeImage from "../../assets/images/Home_Photos/home1.jpg";
import Carousel from "react-bootstrap/Carousel";

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
import axios from "../../axios/axios";
// import homeImage from "../../assets/images/Home_Photos/home1.jpg";
import Announcement from "../Announcement/Announcement";
import announcementTemplate from "../AnnouncementTemplate/AnnouncementTemplate";
class HomeComponent extends Component {
  state = {
    currentAnnouncement: [],
  };

  componentDidMount() {
    axios
      .get("/announcements.json")
      .then((response) => {
        const lastAnnouncement = response.data.length - 1;
        const currentAnnouncement = response.data[lastAnnouncement];
        this.setState({ currentAnnouncement });
      })
      .catch((error) => console.log(error));
  }
  render() {
    const { currentAnnouncement } = this.state;
    let announcement = null;
    if (currentAnnouncement) {
      announcement = (
        <Announcement
          title={currentAnnouncement.title}
          body1={currentAnnouncement.body1}
          body2={currentAnnouncement.body2}
          body3={currentAnnouncement.body3}
          body4={currentAnnouncement.body4}
          body5={currentAnnouncement.body5}
          body6={currentAnnouncement.body6}
          date={currentAnnouncement.date}
        />
      );
      // console.log(currentAnnouncement);
    }
    return (
      <div>
        {/* <img src={homeImage} alt="homeImage" className={classes.Image}></img> */}
        {/* <Announcement /> */}
        {/* <Zoom> */}
        {/* <div className={classes.Container}>
          <img src={homeImage} alt=""></img>
          <div className={classes.text}>
            <h4>Welcome to G & L Haircut</h4>
          </div>
        </div> */}
        {/* <div className={classes.InsideMain}> */}
        <Carousel interval={0} className={classes.InsideMain}>
          <Carousel.Item>{announcement}</Carousel.Item>
          <Carousel.Item>
            {/* <div className={classes.Container}> */}
            <img
              src={homeImage}
              alt="homeImage"
              className={classes.Image}
            ></img>
            {/* <div className={classes.text}> */}
            <Carousel.Caption>
              <h4 className={classes.text}>Welcome to G & L Haircut</h4>
            </Carousel.Caption>
            {/* </div> */}
          </Carousel.Item>
        </Carousel>

        {/* <img id='logo' src={Logo} alt='logo' style={{}}/> */}

        {/* <div className={classes.text}>
            <h4>Welcome to G & L Haircuts</h4>
          </div> */}

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
