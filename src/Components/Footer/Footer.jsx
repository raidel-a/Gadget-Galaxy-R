import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/?scrollToContact=true');
  };

  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/raihven/Gadget-Galaxy-R">
          <GitHubIcon />
          <h2>/src</h2>
        </a>
      </div>
      <ScrollLink onClick={handleClick} to="contact" spy={true} smooth={true} offset={-70} duration={0}>
        <div className="contactUs">Contact Us</div>
      </ScrollLink>
      <div className="copy"> © 2023 GadgetGalaxy </div>
    </div>
  );
}

export default Footer;
