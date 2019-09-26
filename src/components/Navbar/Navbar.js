import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
// import ResponsiveMenu from "react-responsive-navbar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/images/LogoGL.png";
import { Link } from "react-scroll";
const navBar = props => {
  // state = {
  //   stringName: ""
  // };
  // handleClick = () => {
  //   console.log("button was pressed");

  //   if (window.innerWidth < 500) {
  //     console.log("inside the if");
  //     this.setState({ stringName: ".show" });
  //   } else {
  //     this.setState({ stringName: "" });
  //   }
  // };
  // render() {
  // console.log("this.state.stringanme", this.state.stringName);

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

      <div className="container">
        <Navbar.Brand href="/">
          <img
            src={Logo}
            // width="auto"
            // height="auto"
            className="Logo"
            alt="React Bootstrap logo"
            // alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
      </div>


      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/stylists">Stylists</NavLink>

          {/* <NavLink to="/"> */}
          <Link
            to="example-destination"
            spy={true}
            smooth={true}
            // activeClass="some-active-class"
          >
            Contact
          </Link>
          {/* Contact
          </NavLink> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navBar;
