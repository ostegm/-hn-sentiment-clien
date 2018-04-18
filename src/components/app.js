import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import NavBar from './nav-bar';
import Thread from './thread';
import Notfound from './not-found';
import './app.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/threads/:threadId" component={Thread} />
            <Route path="*" component={Notfound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
