import React from "react";
import "./App.css";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import ServicesComponent from "./containers/ServicesComponent/ServicesComponent";
import StylistsComponent from "./containers/StylistsComponent/StylistsComponent";
import NavBar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/gandlhaircut" component={HomeComponent} />
        <Route path="/services" component={ServicesComponent} />
        <Route path="/stylists" component={StylistsComponent} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
