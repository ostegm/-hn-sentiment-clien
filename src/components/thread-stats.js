import React from 'react';
import { connect } from 'react-redux';


export function ThreadStats(props) {
  return (
    <div className="parent-data">
      <div>Total Descendent Comments: {props.thread.descendants}</div>
      <div>Direct Descendant Comments: {props.thread.kids.length}</div>
      <div>Average Word Count of Direct descendants: {props.thread.avgWordCount} words</div>
      <div>Average Setiment of Direct descendants: {props.thread.avgSentiment}</div>
      <div>Average Magnitude of Direct descendants: {props.thread.avgMagnitude}</div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  thread: state.thread,
});

export default connect(mapStateToProps)(ThreadStats);
