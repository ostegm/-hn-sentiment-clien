import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const createMarkup = (text) => ({ __html: text });

export function ThreadHeadLine(props) {
  const posted = (new Date(props.thread.time * 1000)).toString()
  if (props.thread.title) {
    return (
      <Container>
        <Row>
          <Col>
            <h5>{props.thread.title}</h5>
            <div>{`By: ${props.thread.by} || Posted: ${posted}`}</div>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        <Col>
          <h5>{`Comment By: ${props.thread.by}`}</h5>
          <div>{`Posted: ${posted}`}</div>
          <div dangerouslySetInnerHTML={createMarkup(props.thread.text)} />
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state, props) => ({
  thread: state.hnData.thread,
});

export default connect(mapStateToProps)(ThreadHeadLine);
