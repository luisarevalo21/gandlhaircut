import React from "react";
import classes from "./Footer.module.css";
const footer = props => (
  <div className={classes.Footer}>
    <div className={classes.Location}>
      <h4>Location</h4>
      <p>4022 San Pablo Dam Rd</p>
      <p> El Sobrante, CA 94803</p>
    </div>

    <div className={classes.Info}>
      <div className={classes.Hours}>
        <h4>Hours</h4>
        <p>Monday - Friday: 11AM - 7PM</p>
        <p>Saturday: 10AM - 6PM</p>
        <p>Sunday: CLOSED</p>
      </div>
      <div className={classes.Phone}>
        <h4>Phone Number</h4>
        <a href="tel:(510) 222-5756" className={classes.PhoneNumber}>
          (510) 222-5756
        </a>
      </div>
    </div>
  </div>
);

export default footer;
