import React from 'react';
import { connect } from 'react-redux';

import './home.css';

export function Home() {
  return (
    <div className="home-page">
      <h2>Welcome to HN Sentiment Tracker</h2>
    </div>
  );
}


export default connect()(Home);
