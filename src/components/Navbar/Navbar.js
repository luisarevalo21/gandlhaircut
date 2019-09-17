import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import ResponsiveMenu from "react-responsive-navbar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class NavBar extends Component {
  state = {
    stringName: ""
  };
  handleClick = () => {
    console.log("button was pressed");

    if (window.innerWidth < 500) {
      console.log("inside the if");
      this.setState({ stringName: ".show" });
    } else {
      this.setState({ stringName: "" });
    }
  };
  render() {
    console.log("this.state.stringanme", this.state.stringName);

    // console.log("the wdith is", window.innerWidth);

    // let nav = null;
    // if (this.state.show) {
    //   nav = (
    //     <>
    //       <NavLink exact to="/" activeClassName={classes.active}>
    //         Home
    //       </NavLink>
    //       <NavLink to="/services" activeClassName={classes.active}>
    //         Services
    //       </NavLink>
    //       <NavLink to="/stylists" activeClassName={classes.active}>
    //         Stylists
    //       </NavLink>
    //       <NavLink to="/contact">Contact</NavLink>{" "}
    //     </>
    //   );
    // }

    return (
      // <button onClick={this.handleClick} className={classes.NavButton}>
      //   x
      // </button>

      <Navbar collapseOnSelect="true" expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/stylists">Stylists</NavLink>
            <NavLink to="/contact">Contact</NavLink>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;