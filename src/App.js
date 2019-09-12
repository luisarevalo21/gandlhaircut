import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import ServicesComponent from "./containers/ServicesComponent/ServicesComponent";
function App() {
  return (
    <div className="App">
      <HomeComponent />
      <ServicesComponent />
    </div>
  );
}

export default App;
