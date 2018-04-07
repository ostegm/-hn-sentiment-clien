import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export function NavBar(props) {
  return (
    <nav className="nav-bar">
      <h1><Link to="/">Home</Link></h1>
      <Link to="/threads/8863">Test Thread</Link>
    </nav>
  );
}

export default connect()(NavBar);
