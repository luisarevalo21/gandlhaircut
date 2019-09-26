import React, { Component } from "react";

import TableComponent from "../../components/TableComponent/TableComponent";
import image from "../../assets/images/IMG_8999.jpeg";
import classes from "./Services.module.css";
class ServicesComponent extends Component {
  state = {
    styles: [
      { styleName: "Men's Hair cut", price: 15 },
      { styleName: "Women's Hair cut", price: 16 },
      { styleName: "Kids Hair cut", price: 15 },
      { styleName: "Senior Hair cut", price: 12 },
      { styleName: "Hair Color", price: "45+" },
      { styleName: "Perms", price: "60+" },
      { styleName: "Highlights", price: "50+" },
      { styleName: "Blow Dry", price: "25+" },
      { styleName: "Updos for weddings/quinceañera", price: "50+" },
      { styleName: "Wax", price: "10+" }
    ]
  };
  render() {
    return (
      <div className={classes.Services}>
        <img src={image} />
        <TableComponent styles={this.state.styles} />
        <p className={classes.TableFooter}>*prices are subject to change</p>
        <p>Thank You. Have a nice day. God bless you</p>
      </div>
    );
  }
}

export default ServicesComponent;
