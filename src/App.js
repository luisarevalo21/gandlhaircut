import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import ServicesComponent from "./containers/ServicesComponent/ServicesComponent";
import NavBar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/services" component={ServicesComponent} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
