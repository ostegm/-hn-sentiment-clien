import React from 'react';
import { connect } from 'react-redux';
import { Card, Elevation } from "@blueprintjs/core";
import { Container, Row, Col } from 'reactstrap';
import './thread-stats.css';

const formatScore = (score) => {
  return (score * 100).toFixed(0) + "%";
};

const getColor = (sentiment) => {
  // Rescale from (-100, 100) to (0, 1).
  const rescaled = ((sentiment + 100) / 200);
  const colorValue = rescaled * 120;
  return `hsl(${colorValue}, 100%, 50%)`;
};

export function ThreadStats(props) {
  const sentimentValue = formatScore(props.thread.avgSentiment)
  const cssObject = {
    color: getColor(parseFloat(sentimentValue)),
    'margin-right': '5px',
  };
  return (
    <Container>
      <Row>
        <Col xs='4'>
          <Card interactive={false} elevation={Elevation.FIVE}>
              <h5>Average Sentiment</h5>
              <span style={cssObject}>&#x25cf;</span>{sentimentValue}
          </Card>
        </Col>
        <Col xs='4'>
          <Card interactive={false} elevation={Elevation.FIVE}>
              <h5>Total Comments</h5>
              <span>{props.thread.descendants || props.thread.kids.length}</span>
          </Card>
        </Col>
        <Col xs='4'>
          <Card interactive={false} elevation={Elevation.FIVE}>
              <h5>Direct Responses</h5>
              <span>{props.thread.kids.length}</span>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state, props) => ({
  thread: state.hnData.thread,
});

export default connect(mapStateToProps)(ThreadStats);
