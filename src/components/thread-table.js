import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import TextPopover from './text-popover';

const parseTimestamp = (timestamp) => {
  const dt = new Date(timestamp * 1000);
  return dt.toISOString().slice(0, 16);
};

const formatScore = (score) => {
  return (score * 100).toFixed(0) + '%';
};

const getColor = (sentiment) => {
  // Rescale from (-100, 100) to (0, 1).
  const rescaled = ((sentiment + 100) / 200);
  const colorValue = rescaled * 120;
  return `hsl(${colorValue}, 100%, 50%)`;
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
    Header: 'Comment (click to view more)',
    id: 'comment',
    accessor: k => <TextPopover kid={k}/>,
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
];

export function ThreadTable(props) {
  return <ReactTable data={props.thread.kids} columns={tableColumns} />;
}

const mapStateToProps = (state, props) => ({
  thread: state.hnData.thread,
});

export default withRouter(connect(mapStateToProps)(ThreadTable));
