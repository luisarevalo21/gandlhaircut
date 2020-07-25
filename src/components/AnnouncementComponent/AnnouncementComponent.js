import React, { Component } from "react";
import classes from "./AnnouncementComponent.module.css";
import axios from "../../axios/axios";
import AnnouncementTemplate from "../AnnouncementTemplate/AnnouncementTemplate";

class AnnouncementComponent extends Component {
  state = {
    announcements: [],
  };

  componentDidMount() {
    axios
      .get("/announcements.json")
      .then((response) => {
        this.setState({ announcements: response.data });
      })
      .catch((error) => console.log("the error is", error));
  }
  render() {
    const { announcements } = this.state;
    console.log(announcements);
    let displayedAnnouncements = <div></div>;
    if (announcements) {
      const sortedList = announcements.sort((a, b) => {
        return b.id - a.id;
      });
      displayedAnnouncements = sortedList.map((element) => (
        <AnnouncementTemplate
          body1={element.body1}
          body2={element.body2}
          body3={element.body3}
          body4={element.body4}
          body5={element.body5}
          body6={element.body6}
          title={element.title}
          key={element.id}
          date={element.date}
        />
      ));
    }
    // <div className={classes.top} key={element.id}>
    //   <h2>{element.title}</h2>
    //   <div>
    //     {element.body1}
    //     <p>{element.body2} </p>
    //   </div>
    //   <p>posted on {element.date}</p>
    // </div>

    // console.log(this.state.announcements);

    return (
      <div className={classes.Container}>
        <h3 className={classes.Title}>Announcements:</h3>
        {displayedAnnouncements}
      </div>
    );
  }
}

export default AnnouncementComponent;
