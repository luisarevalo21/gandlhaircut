import React, { useState } from "react";
import classes from "./Contact.module.css";

const Contact = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log("submit has been intalized");
    console.log("Values are:", name);
    console.log("Values are:", email);
    console.log("Values are:", subject);
    console.log("Values are:", description);
  };

  return (
    <form className={classes.Form} onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        type="text"
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        type="email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        placeholder="Subject"
        type="text"
        onChange={e => setSubject(e.target.value)}
      />
      {/* <div className={classes.Contact}> */}
      <textarea
        placeholder="Description"
        type="text"
        onChange={e => setDescription(e.target.value)}
      />
      <button>Submit</button>
      {/* </div> */}
    </form>
  );
};

export default Contact;
