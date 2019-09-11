import React, { Component } from "react";
import image from "../assets/images/fakeLawn.jpeg";
import classes from "./HomeComponent.module.css";

class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className={classes.container}>
          <img src={image}></img>

          <div className={classes.text}>
            <h4>Welcome to G & L Haircuts</h4>
          </div>
        </div>

        <div className={classes.block}>
          <div>
            <h4>About Us</h4>
            <p>Family owned salonist since year</p>
            <p>
              We take pride in our work and do our best to make you look your
              best
            </p>
            <p>We strive </p>
          </div>
          <div>
            <img src={image} width="100px" />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
