import React from "react";
import classes from "./Footer.module.css";
// import Contact from "../Contact/Contact";
// import Navbar from 'react-bootstrap/Navbar';
import { Element } from "react-scroll";

const footer = (props) => (
  <Element id="example-destination" name="example-destination">
    <div className={classes.Footer}>
      <div className={classes.LocationBlock}>
        <h4>Location</h4>

        {/* href="http://maps.google.com/maps?q=4022+San+Pablo+Dam+Rd,+El+Sobrante,+CA+94803"> */}
        <a
          href="https://www.google.com/maps/place/G+%26+L+Haircuts/@37.9655298,-122.3110022,15z/data=!4m5!3m4!1s0x0:0x41940bcc76235129!8m2!3d37.9655298!4d-122.3110022"
          className={classes.Address}
        >
          <p>4022 San Pablo Dam Rd</p>
          <p> El Sobrante, CA 94803</p>
        </a>
      </div>

      {/* <div className={classes.Info}> */}
      <div className={classes.Hours}>
        <h4>Hours</h4>
        <p>Monday - Friday: 11AM - 7PM</p>
        <p>Saturday: 10AM - 6PM</p>
        <p>Sunday: CLOSED</p>
      </div>

      <div className={classes.Phone}>
        <h4>Phone Numbers</h4>
        <a href="tel:(510) 222-5756" className={classes.PhoneNumber}>
          Salon: (510) 222-5756
        </a>
        <a href="tel:(510) 672-9878" className={classes.PhoneNumber}>
          Glenda: (510) 672-9878
        </a>
        <a href="tel:(510) 695-8030" className={classes.PhoneNumber}>
          Lorena: (510) 695-8030
        </a>
      </div>
      {/* </div> */}
      {/* <Contact className={classes.Contact} /> */}
    </div>
  </Element>
);

export default footer;
