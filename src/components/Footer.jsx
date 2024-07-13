import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faTwitter } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Copyright © SteeZers 2024</p>
        {/* <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
        </div> */}
      </div>
      <div className="footer-right">
        <p>Subscribe to our Newsletter</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email here" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;

