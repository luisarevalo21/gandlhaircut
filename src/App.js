import React from "react";
import "./App.css";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import ServicesComponent from "./containers/ServicesComponent/ServicesComponent";
import StylistsComponent from "./containers/StylistsComponent/StylistsComponent";
import NavBar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import ReactGA from "react-ga";
import AnnouncmentComponent from "./components/AnnouncementComponent/AnnouncementComponent";
import Announcement from "./components/Announcement/Announcement";
function App() {
  const trackingId = "UA-150886843-1";
  ReactGA.initialize(trackingId);

  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/gandlhaircut" component={HomeComponent} />
        <Route path="/services" component={ServicesComponent} />
        <Route path="/stylists" component={StylistsComponent} />
        <Route path="/announcements" component={AnnouncmentComponent} />
      </Switch>

      <Footer />
    </div>
  );
}

// function initializeReactGA() {
//   ReactGA.initialize("UA-150886843-1");
//   ReactGA.pageview("/homepage");
// }

export default App;
