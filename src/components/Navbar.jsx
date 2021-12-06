import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav>
        <div className="nav__logo">
          <h1>CryptoMarket</h1>
        </div>
        <ul>
          <Link to="/">
            <li>Dashboard</li>
          </Link>
          <Link to="cryptocurrencies">
            <li>Cryptocurrencies</li>
          </Link>
          <Link to="exchanges">
            <li>Exchanges</li>
          </Link>
          <Link to="news">
            <li>News</li>
          </Link>
        </ul>
      </nav>
    );
}

export default Navbar
