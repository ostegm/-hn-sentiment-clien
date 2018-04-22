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
  return cleaned
};

const parseTimestamp = (timestamp) => {
  const dt = new Date(timestamp * 1000);
  return dt.toISOString().slice(0, 16);
};

const formatScore = (score) => {
  return (score * 100).toFixed(0) + "%";
};

const getColor = (sentiment) => {
  // Rescale from (-100, 100) to (0, 1).
  const rescaled = ((sentiment + 100) / 200);
  const colorValue = rescaled * 120;
  return `hsl(${colorValue}, 100%, 50%)`
};


const colorizeSentimentText = (row) => {
  const cssObject = {
    color: getColor(parseFloat(row.value)),
    transition: 'all .3s ease',
  };
  return (
    <span>
      <span style={cssObject}>&#x25cf;</span>
      { row.value }
    </span>
  );
};

const makeLink = (kid) => {
  const childComments = kid.kids ? kid.kids.length : 0;
  if (childComments) {
    return <Link to={`/threads/${kid.id}`}>View subthread</Link>;
  }
  return;
};

const tableColumns = [
  {
    Header: 'Posted (UTC)',
    id: 'posted',
    accessor: k => parseTimestamp(k.time),
    sortMethod: (a, b) => {
      return ((new Date(a)) > (new Date(b))) ? 1 : -1;
    },
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
    Cell: row => colorizeSentimentText(row),
    sortMethod: (a, b) => {
      return parseFloat(a) > parseFloat(b) ? 1 : -1;
    },
  },
  {
    Header: 'Child Comments',
    id: 'childComments',
    accessor: k => k.kids ? k.kids.length : 0,
  },
  {
    Header: 'SubThread',
    id: 'subThread',
    accessor: k => makeLink(k),
  },
];

export function ThreadTable(props) {
  return <ReactTable data={props.thread.kids} columns={tableColumns} />;
}

const mapStateToProps = (state, props) => ({
  thread: state.hnData.thread,
});

export default withRouter(connect(mapStateToProps)(ThreadTable));
