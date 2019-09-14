import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <NavLink exact to="/" activeClassName={classes.active}>
          Home
        </NavLink>
        <NavLink to="/services" activeClassName={classes.active}>
          Services
        </NavLink>
        <NavLink to="/stylists" activeClassName={classes.active}>
          Stylists
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    );
  }
}

export default NavBar;
