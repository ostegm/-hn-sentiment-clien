import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import NavBar from './nav-bar';
import Thread from './thread';

import './app.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/threads/:threadId" component={Thread} />
        </main>
      </div>
    </Router>
  );
}
