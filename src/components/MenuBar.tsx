// MenuBar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/scss/App.css';

const MenuBar: React.FC = () => {
  return (
    <nav className="menu-bar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about/">About</NavLink>
        </li>
        <li>
          <NavLink to="/blog/">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact/">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
