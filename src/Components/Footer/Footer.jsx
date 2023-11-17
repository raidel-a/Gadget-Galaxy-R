import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/aulindoraiyan/Gadget-Galaxy">
          <GitHubIcon />
          <p>/src</p>
        </a>
      </div>
      <div className="contactUs"><a href="/">Contact Us</a></div>
      <p> &copy; 2023 GadgetGalaxy </p>
    </div>
  );
}

export default Footer;
