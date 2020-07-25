import React from "react";
import classes from "./AnnouncementTemplate.module.css";

const announcementTemplate = (props) => (
  <div className={classes.Outer}>
    <div className={classes.Inner}>
      <h2>{props.title}</h2>
      <div>
        <p className={classes.paragraphs}> {props.body1} </p>
        <p className={classes.paragraphs}>{props.body2} </p>
        <p className={classes.paragraphs}>{props.body3} </p>
        <p className={classes.paragraphs}>{props.body4} </p>
        <p className={classes.paragraphs}>{props.body5} </p>
        <p className={classes.paragraphs}> {props.body6} </p>
      </div>
      {props.date ? (
        <p className={classes.Date}>Posted on {props.date}</p>
      ) : null}
    </div>
  </div>
);

export default announcementTemplate;
