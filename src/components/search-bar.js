import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import Input from './input';
import { required, nonEmpty, webAddress } from '../validators';
import './search-bar.css';

export class SearchBar extends React.Component {
  onSubmit(values) {
    const threadId = values.hnAddress.split('item?id=')[1];
    this.props.history.push(`/threads/${threadId}`);
  }

  render() {
    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div className="message message-success">
          Message submitted successfully
        </div>
      );
    }

    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message message-error">{this.props.error}</div>
      );
    }

    return (
      <div className="wrap">
        {successMessage}
        {errorMessage}
        <form className="search" onSubmit={this.props.handleSubmit(v => this.onSubmit(v))}>
          <Field
            className="searchTerm"
            name="hnAddress"
            type="text"
            placeholder="https://news.ycombinator.com/item?id=8863"
            component={Input}
            label="Enter a Hacker News URL"
            validate={[required, nonEmpty, webAddress]}
          />
          <button
            className="searchButton"
            type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Analyze Sentiment
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(reduxForm({ form: 'hnSearchBar' })(SearchBar));
