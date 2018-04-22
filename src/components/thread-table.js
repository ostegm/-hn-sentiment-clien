import React from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table'
import { Link, withRouter } from 'react-router-dom';
import "react-table/react-table.css";

const cleanAndShortenText = (text) => {
  let cleaned = text.replace(/<br>/gi, "\n");
  cleaned = cleaned.replace(/<p.*>/gi, "\n");
  cleaned = cleaned.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, "");
  cleaned = cleaned.replace(/<(?:.|\s)*?>/g, "");
  return cleaned//cleaned.split(/\s+/).slice(0, 20).join(' ') + '...';
};

const parseTimestamp = (timestamp) => {
  const dt = new Date(timestamp * 1000);
  return dt.toISOString().slice(0, 16);
};

const formatScore = (score) => {
  return (score * 100).toFixed(0) + "%";
}


export class ThreadTable extends React.Component {
  getColumns() {
    return [
      {
        Header: 'Posted (UTC)',
        id: 'posted',
        accessor: k => parseTimestamp(k.time),
      },
      {
        Header: 'Comment',
        id: 'comment',
        accessor: k => cleanAndShortenText(k.text),
      },
      {
        Header: 'Sentiment',
        id: 'sentiment',
        accessor: k => formatScore(k.documentSentiment.score),
      },
      {
        Header: 'Child Comments',
        id: 'childComments',
        accessor: k => k.kids ? k.kids.length : 0,
      },
      {
        Header: 'SubThread',
        id: 'subThread',
        accessor: k => this.makeLink(k),
      },
    ];
  };
  
  makeLink(kid) {
    const childComments = kid.kids ? kid.kids.length : 0;
    if (childComments) {
      return <Link to={`/threads/${kid.id}`}>View subthread</Link>
    }
    return
  }

  render() {
    return <ReactTable data={this.props.thread.kids} columns={this.getColumns()}/>;
  }
}

const mapStateToProps = (state, props) => ({
  thread: state.hnData.thread,
});

export default withRouter(connect(mapStateToProps)(ThreadTable));
