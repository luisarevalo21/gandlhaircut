import React from "react";
import classes from "./Announcement.module.css";
const announcement = (props) => (
  <div className={classes.Outer}>
    <div className={classes.Inner}>
      <h3 style={{ textAlign: "center" }}>Announcements:</h3>
      <p style={{ fontWeight: "bold" }}>{props.title}</p>
      <p className={classes.paragraphs}> {props.body1} </p>
      <p className={classes.paragraphs}>{props.body2} </p>
      <p className={classes.paragraphs}>{props.body3} </p>
      <p className={classes.paragraphs}>{props.body4} </p>
      <p className={classes.paragraphs}>{props.body5} </p>
      <p className={classes.paragraphs}> {props.body6} </p>
      {props.date ? (
        <p className={classes.Date}>Posted on {props.date}</p>
      ) : null}
      {/* <p style={{ fontWeight: "bold" }}>Our hours will be from 11AM - 6PM.</p>
      <p>*Changes will go into effect immediately and last indefinitely.</p>
      <p>Thank you for your patience. God Bless.</p> */}
    </div>
  </div>
);

export default announcement;
