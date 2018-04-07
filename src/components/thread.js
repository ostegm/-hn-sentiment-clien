import React from 'react';
import { connect } from 'react-redux';


export function Thread(props) {
  return (
    <div>
      <h2>{`currently viewing ${props.threadId}`}</h2>
      {props.title}
    </div>
  );
}

const mapStateToProps = (state, props) => {
  const threadId = props.match.params.threadId;
  const thread = state.threads[threadId];
  return Object.assign({}, thread, {
    threadId,
  });
};

export default connect(mapStateToProps)(Thread);
