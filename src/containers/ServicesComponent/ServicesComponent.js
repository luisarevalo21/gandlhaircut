import React, { Component } from "react";

import TableComponent from "../../components/TableComponent/TableComponent";
import image from "../../assets/images/IMG_8999.jpeg";
import "./Services.module.css";
class ServicesComponent extends Component {
  state = {
    styles: [
      { styleName: "Men's Hair cut", price: 15 },
      { styleName: "Women's Hair cut", price: 16 },
      { styleName: "Senior Hair cut", price: 10 },
      { styleName: "Hair Color", price: "45+" },
      { styleName: "Perms", price: "60+" },
      { styleName: "Highlights", price: "50+" },
      { styleName: "Blow Dry", price: "50+" }
    ]
  };
  render() {
    return (
      <div>
        <img src={image} />
        <TableComponent styles={this.state.styles} />
        <p>Thank You</p>
        <p>Have a nice day</p>
        <p>God bless you</p>
      </div>
    );
  }
}

export default ServicesComponent;
