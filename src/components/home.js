import React from 'react';
import { connect } from 'react-redux';
import RecentlyScored from './recently-scored';
import SearchBar from './search-bar';
import './home.css';

export function Home() {
  return (
    <div className="home-page">
      <h1>Want to know how people are responding to a Hacker News thread?</h1>
      <SearchBar />
      <RecentlyScored />
    </div>
  );
}


export default connect()(Home);
