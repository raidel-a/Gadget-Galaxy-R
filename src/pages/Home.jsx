import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Deals from "../Components/Deals/Deals";
import Contact from "../Components/Contact/Contact";
import { Gradient } from "../Components/Renderer3D/Gradient";

function Home() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");

    // Clean up function to disconnect when the component unmounts
    return () => {
      gradient.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <div className="home">
      <canvas id="gradient-canvas" data-transition-in />
      <div className="headingContainer">
        <h1> Gadget Galaxy </h1>
        <p> Find DEALS Out of This World </p>
      </div>
      <div className="buttonCont">
        <Link to="/products">
          <button type="button">
            <span></span>
            <span></span>
            <span></span>
            <span></span> Browse All Products{" "}
          </button>
        </Link>
      </div>
      <div className="dealsContainer">
        <Deals />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
