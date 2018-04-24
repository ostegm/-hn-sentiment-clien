import React from 'react';
import { connect } from 'react-redux';
import Trend from 'react-trend';
import './thread-trend.css'

export const ThreadTrend = (props) => {
  const scores = props.thread.kids.map((k) => {
    return parseFloat(k.documentSentiment.score)
  });
  if (scores.length > 1) {
    return (
      <div className="thread-trend">
        <Trend
          smooth
          autoDraw
          autoDrawDuration={2000}
          autoDrawEasing='ease-out'
          data={scores}
          gradient={['hsl(0, 100%, 50%)', 'hsl(60, 100%, 50%)', 'hsl(120, 100%, 50%)']}
          radius={10}
          strokeWidth={2}
          strokeLinecap='butt'
        />
      </div>
    );
  }
  return null;
};

const mapStateToProps = (state, props) => ({
  thread: state.hnData.thread,
});

export default connect(mapStateToProps)(ThreadTrend);
