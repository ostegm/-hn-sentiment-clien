import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './thread-headline.css'

const createMarkup = (text) => ({ __html: text });

export function ThreadHeadLine(props) {
  const posted = (new Date(props.thread.time * 1000)).toString()
  if (props.thread.title) {
    return (
      <Container className="thread-headline">
        <Row>
          <Col>
            <h5>{props.thread.title}</h5>
            <div className="by-line">
              <p>{`By: ${props.thread.by} || Posted: ${posted}`}</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container className="thread-headline">
      <Row>
        <Col>
          <h5>{`Comment By ${props.thread.by}`}</h5>
          <div className="by-line">
            <p>{`Posted: ${posted}`}</p>
          </div>
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
