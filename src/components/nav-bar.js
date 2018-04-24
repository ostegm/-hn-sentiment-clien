import React from 'react';
import { Link } from 'react-router-dom';
import logo from './color_logo_transparent.svg';
import './nav-bar.css';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img src={logo} alt="dabbl.io logo" className="app-logo" />
      </Link>
    </nav>
  );
}
