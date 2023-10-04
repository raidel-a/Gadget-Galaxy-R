import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/About Us/AboutUs";

function App() {
  return (
    <Router>
      <div className="white-gradient">
        <Header />
        <Body />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
