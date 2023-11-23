import { useEffect } from "react";
import { scroller } from "react-scroll";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Deals from "../Components/Deals/Deals";
import Contact from "../Components/Contact/Contact";
import { Gradient } from "../Components/Renderer3D/Gradient";
import "../styles/Home.css";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  
    // Scroll to the "contact" div if the URL flag is present
    if (location.search === '?scrollToContact=true') {
      scroller.scrollTo("contact", {
        duration: 500,
        delay: 0,
        smooth: true,
        offset: -70, // Scrolls to element + 70 pixels down the page
      });
    }
  }, []);

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
            <span></span> Browse All Products
          </button>
        </Link>
      </div>
      <div className="dealsContainer">
        <Deals />
      </div>
      <div id="contact" className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
