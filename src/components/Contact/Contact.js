import React from "react";
import classes from "./Contact.module.css";

const contact = props => (
  <form className={classes.Form}>
    <input placeholder="Name" type="text" />
    <input placeholder="Email" type="email" />
    <input placeholder="Subject" type="text" />
    <textarea placeholder="Description" type="text" />
    <button>Submit</button>
  </form>
);

export default contact;
