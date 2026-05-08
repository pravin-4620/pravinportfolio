import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
           By Pravin PT © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
