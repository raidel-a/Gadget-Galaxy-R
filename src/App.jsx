import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./utils/Components/Header";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body";

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
