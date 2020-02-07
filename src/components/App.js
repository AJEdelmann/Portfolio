import React from "react";
import "../css/App.css";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
