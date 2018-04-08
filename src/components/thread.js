import React from 'react';
import { connect } from 'react-redux';
import ThreadStats from './thread-stats';
import ThreadChild from './thread-child';

export function Thread(props) {
  const kids = props.thread.kids.map((kid, index) => {
    return <ThreadChild key={index} kid={kid}/>
  })
  return (
    <div>
      <h2>{props.thread.title}</h2>
      <ThreadStats />
      <ul>
        {kids}
      </ul>

    </div>
  )
}

const mapStateToProps = (state, props) => ({
  thread: state.thread,
  threadId: props.match.params.threadId,
});

export default connect(mapStateToProps)(Thread);
