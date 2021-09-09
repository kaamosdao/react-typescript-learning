import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper #00bcd4 cyan px1">
        <a href="/" className="brand-logo left">
          React + Typescript
        </a>
        <ul className="right">
          <li>
            <Link to="/">Tasks</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
