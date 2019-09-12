import React, { Component } from "react";

import TableComponent from "../../components/TableComponent/TableComponent";
import image from "../../assets/images/IMG_8999.jpeg";
import "./Services.module.css";
class ServicesComponent extends Component {
  state = {
    styles: [
      { styleName: "Men's Hair cut", price: 15 },
      { styleName: "Women's Hair cut", price: 16 },
      { styleName: "Hair cut", price: 15 },
      { styleName: "Hair cut", price: 15 },
      { styleName: "Hair cut", price: 15 }
    ]
  };
  render() {
    return (
      <div>
        <img src={image} />
        <TableComponent styles={this.state.styles} />
      </div>
    );
  }
}

export default ServicesComponent;
