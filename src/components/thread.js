import React from 'react';
import { Spinner } from "@blueprintjs/core";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import ThreadHeadline from './thread-headline';
import ThreadStats from './thread-stats';
import ThreadTrend from './thread-trend';
import ThreadTable from './thread-table';
import { fetchThread } from '../actions';
import './thread.css'


export class Thread extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchThread(this.props.threadId));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.threadId !== nextProps.threadId) {
      console.log('Dispatching.')
      this.props.dispatch(fetchThread(nextProps.threadId));
    }
  }
          
  render() {
    if (this.props.loading) {
      return (
        <Container className="loading">
          <h5>Hold tight, we're fetching your content...</h5>
          <Spinner />
        </Container>
      )
    } else if (this.props.error) {
      return <p>Oops - Somethign went wrong.</p>;
    }
    return (
      <Container>
        <ThreadHeadline />
        <ThreadStats />
        <ThreadTrend />
        <ThreadTable />
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => ({
  loading: state.hnData.loading,
  error: state.hnData.error,
  thread: state.hnData.thread,
  threadId: props.match.params.threadId,
});

export default withRouter(connect(mapStateToProps)(Thread));
