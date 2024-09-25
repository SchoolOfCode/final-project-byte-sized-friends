import React from 'react';
import './Footer.css';  // Include the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icon">
        <p className="material-symbols-outlined">public</p>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </div>
      <div className="footer-icon">
        <p className="material-symbols-outlined">chat_bubble</p>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </div>
      <div className="footer-icon">
        <p className="material-symbols-outlined">person</p>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </div>
    </footer>
  );
};

export default Footer;
