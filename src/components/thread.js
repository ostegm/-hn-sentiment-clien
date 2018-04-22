import React from 'react';
import Spinner from 'react-spinkit';
import { connect } from 'react-redux';
import ThreadStats from './thread-stats';
import ThreadTrend from './thread-trend';
import ThreadTable from './thread-table';
import { fetchThread } from '../actions';

export class Thread extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchThread(this.props.threadId));
  }

  render() {
   if (this.props.loading) {
      return <Spinner fadeIn='none' />;
    } else if (this.props.error) {
      return <p>Oops - Somethign went wrong.</p>
    }
    const titleText = this.props.thread.title || this.props.thread.text;
    const posted = (new Date(this.props.thread.time * 1000)).toString()
    return (
      <div>
        <h2>{titleText}</h2>
        <div className="byLine">
          <span>{`By: ${this.props.thread.by} || Posted: ${posted}`}</span>
        </div>
        <ThreadStats />
        <ThreadTrend />
        <ThreadTable />
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
