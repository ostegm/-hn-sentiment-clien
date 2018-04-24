import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Intent, Popover, PopoverInteractionKind, Position } from "@blueprintjs/core";
import './text-popover.css'

const shortenText = (text) => {
  // Removes URLs and keeps the first 6 words.
  let cleaned = text.replace(/<br>/gi, '\n');
  cleaned = cleaned.replace(/<p.*>/gi, '\n');
  cleaned = cleaned.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, '');
  cleaned = cleaned.replace(/<(?:.|\s)*?>/g, '');
  const firstFewWords = (cleaned.split(/\s+/).slice(0,6).join(' ') + '...')
  return firstFewWords;
};

const createMarkup = (text) => ({ __html: text });

export class TextPopover extends React.Component {
  constructor(props) {
    super(props);
  }

  viewSubthread() {
    this.props.history.push(`/threads/${this.props.kid.id}`);
  }

  makeSubThreadButton() {
    if (this.props.kid.kids.length) {
      return (
        <Button
          className="subthread-button"
          onClick={e => this.viewSubthread()}>View Sentiment of Subthread
        </Button>
      );
    }
    return null;
  }

  render() {
    return (
      <Popover
        interactionKind={PopoverInteractionKind.HOVER}
        popoverClassName="pt-popover-content-sizing"
        position={Position.RIGHT}
      >
        <div intent={Intent.PRIMARY}>{shortenText(this.props.kid.text)}</div>
        <div>
          <h5>Comment</h5>
          <div dangerouslySetInnerHTML={createMarkup(this.props.kid.text)} />
          {this.makeSubThreadButton()}
          <Button className="pt-popover-dismiss">Dismiss</Button>
        </div>
      </Popover>
    );
  }
}

export default withRouter(TextPopover);
