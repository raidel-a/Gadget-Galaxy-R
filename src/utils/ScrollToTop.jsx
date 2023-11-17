import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/ScrollToTop.css';
import DoubleArrowUp from '@mui/icons-material/KeyboardDoubleArrowUp';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const location = useLocation();

  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setIsRotated(!isRotated); // Toggle rotation state on click
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    isVisible && (
      <button onClick={scrollToTop} className={`scroll-to-top ${isRotated ? 'rotate' : ''}`}>
        <DoubleArrowUp className="arrow-up-icon" />
      </button>
    )
  );
};

export default ScrollToTopButton;
