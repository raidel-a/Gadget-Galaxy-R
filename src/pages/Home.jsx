import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pixelGalaxy.jpg';
import '../styles/Home.css';
import Deals from "../Components/Deals/Deals";
import Contact from "../Components/Contact/Contact";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="headingContainer">
        <h1> Gadget Galaxy </h1>
        <p> Find DEALS out of this world </p>
        <Link to="/products">
          <button> Browse All Products </button>
        </Link>
      </div>

      <div className='dealsContainer'><Deals /></div>
      <div>
        <Contact />
      </div>

    </div>

  );
}

export default Home;
