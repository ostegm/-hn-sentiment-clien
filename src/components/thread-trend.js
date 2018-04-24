import React from 'react';
import { connect } from 'react-redux';
import Trend from 'react-trend';

export const ThreadTrend = (props) => {
  const scores = props.thread.kids.map((k) => {
    return parseFloat(k.documentSentiment.score)
  });
  if (scores.length > 1) {
    return (
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
    );
  }
  return null;
};

const mapStateToProps = (state, props) => ({
  thread: state.hnData.thread,
});

export default connect(mapStateToProps)(ThreadTrend);
