import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './search-bar';
import './home.css';

export function Home() {
  return (
    <div className="home-page">
      <h1>Want to know how people are responding to a Hacker News Thread?</h1>
      <SearchBar />
    </div>
  );
}


export default connect()(Home);
