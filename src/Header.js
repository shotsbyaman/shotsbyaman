import React from 'react';
import instagramLogo from './pictures/instagram_logo.png';

const Header = () => {
  return (
    <header className="header">
      <img src="./logo.png" alt="Header Image" className="header-image" />
      <div className="header-buttons">
        <button className="header-button">Home</button>
        <button className="header-button">About</button>
        <button className="header-button">Travel</button>
        <button className="header-button">Relax</button>
      </div>
      <a href="https://www.instagram.com/shotsbyaman/" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram Logo" className="instagram-logo" />
      </a>
    </header>
  );
};

export default Header;
