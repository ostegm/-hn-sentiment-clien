import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty, webAddress } from '../validators';
import './search-bar.css'

export class SearchBar extends React.Component {
  onSubmit(values) {
    console.log('Form submited with values: ', values)
    this.props.history.push('/');
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
        <form className="search" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
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

export default reduxForm({
  form: 'hnSearchBar',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('hnSearchBar', Object.keys(errors)[0])),
})(SearchBar);