import React from "react";
import classes from "./ImageComponent.module.css";
const imageComponent = props => (
  <img
    className="d-block w-100"
    src={props.image}
    alt="First slide"
    className={classes.Image}
  />
);

export default imageComponent;
