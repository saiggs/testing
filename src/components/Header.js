import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="placeholder-logo.png" alt="Logo" />
        <h1>Your E-Commerce Store</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
