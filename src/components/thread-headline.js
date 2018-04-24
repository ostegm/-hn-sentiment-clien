import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import './thread-headline.css';

const createMarkup = text => ({ __html: text });

const getHnLink = (id) => {
  return (
    <a href={`https://news.ycombinator.com/item?id=${id}`}>View on Hacker News</a>
  );
};

export function ThreadHeadLine(props) {
  const posted = (new Date(props.thread.time * 1000)).toString();
  if (props.thread.title) {
    const hnLink = getHnLink(props.thread.id);
    console.log(hnLink);
    return (
      <Container className="thread-headline">
        <Row>
          <Col>
            <h3>{props.thread.title}</h3>
            <div className="by-line">
              <span>{`By: ${props.thread.by} || Posted: ${posted} || `}</span>
              {hnLink}
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
          <h3>{`Comment By ${props.thread.by}`}</h3>
          <div className="by-line">
            <p>{`Posted: ${posted}`}</p>
          </div>
          <div
            className="comment-text"
            dangerouslySetInnerHTML={createMarkup(props.thread.text)}
          />
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state, props) => ({
  thread: state.hnData.thread,
});

export default connect(mapStateToProps)(ThreadHeadLine);
