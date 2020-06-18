import React from "react";
import classes from "./Announcement.module.css";
const announcement = (props) => (
  <div className={classes.Outer}>
    <div className={classes.Inner}>
      <h3 style={{ textAlign: "center" }}>Announcements:</h3>
      <p style={{ fontWeight: "bold" }}>The salon is now open.</p>
      <p>
        Due to COVID 19, We had to make some adjustments for the safety of our
        clients. <br />
        Mon-Sat. We will accept walks and you may call ahead to schedule an
        appointment. We are also asking our clients to wait in their cars or
        outside to limit the amount of people inside the salon at once. <br />
        Sun will remain closed.
        <br />{" "}
        <p style={{ fontWeight: "bold" }}>Our hours will be from 11AM - 6PM.</p>
      </p>
      <p>*Changes will go into effect immediately and last indefinitely.</p>
      <p>Thank you for your patience. God Bless.</p>
    </div>
  </div>
);

export default announcement;
