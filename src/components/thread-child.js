import React from 'react';
import { Link } from 'react-router-dom';

const shortenText = (text) => (text.split(/\s+/).slice(0,6).join(' ') + '...');

export default function ThreadChild(props) {
  return (
    <div className="thread-child">
      <div>Sentiment: {props.kid.documentSentiment.score}</div>
      <div>Magnitude: {props.kid.documentSentiment.magnitude}</div>
      <div>Word Count: {props.kid.wordCount}</div>
      <Link to={`/threads/${props.kid.id}`}>{shortenText(props.kid.text)}</Link>
    </div>
  );
}

