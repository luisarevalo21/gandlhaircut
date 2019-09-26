import React from "react";
import classes from "./ImageComponent.module.css";
const imageComponent = props => (
  <img src={props.image} alt="First slide" className={classes.Image} />
);

export default imageComponent;
