import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './search-bar'
import './home.css';

export function Home() {
  return (
    <div className="home-page">
      <h2>Welcome to HN Sentiment Tracker</h2>
      <SearchBar />
    </div>
  );
}


export default connect()(Home);
