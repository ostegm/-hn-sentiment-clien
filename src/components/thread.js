import React from 'react';
import { connect } from 'react-redux';
import ThreadStats from './thread-stats';
import ThreadChild from './thread-child';
import { fetchThread } from '../actions';

export class Thread extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchThread(this.props.threadId));
  }

  render() {
    const kids = this.props.thread.kids.map((kid, index) => {
      return <ThreadChild key={index} kid={kid}/>;
    });
    return (
      <div>
        <h2>{this.props.thread.title}</h2>
        <ThreadStats />
        <ul>
          {kids}
        </ul>

      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return{
    loading: state.hnData.loading,
    error: state.hnData.error,
    thread: state.hnData.thread,
    threadId: props.match.params.threadId,
  }
};

export default connect(mapStateToProps)(Thread);
