import React, { Component } from "react";
import TableComponent from "../../components/TableComponent/TableComponent";
import image from "../../assets/images/IMG_0619.JPG";
import classes from "./Services.module.css";
import Slide from "react-reveal/Slide";

class ServicesComponent extends Component {
  state = {
    styles: [
      { styleName: "Men's Hair cut", price: 16 },
      { styleName: "Women's Hair cut", price: 16 },
      { styleName: "Kid's Hair cut", price: 16 },
      { styleName: "Senior's Hair cut", price: 15 },
      { styleName: "Hair Color", price: "55+" },
      { styleName: "Perms", price: "75+" },
      { styleName: "Highlights", price: "70+" },
      { styleName: "Blow Dry", price: "30+" },
      { styleName: "Updos for weddings/quinceañera", price: "50+" },
      { styleName: "Wax", price: "10+" },
    ],
  };
  render() {
    return (
      <>
        <div className={classes.Services}>
          <img src={image} alt="prices" />
          <Slide left>
            {/* <h4 className={classes.ServicesTag}>Services</h4> */}
          </Slide>
        </div>
        <TableComponent styles={this.state.styles} />
        <p className={classes.TableFooter}>*prices are subject to change</p>
        <p>Thank You. Have a nice day!</p>
      </>
    );
  }
}

export default ServicesComponent;
