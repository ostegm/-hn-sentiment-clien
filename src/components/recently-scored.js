import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchRecent } from '../actions';
import './recently-scored.css';

const makeLink = (title, id, index) => {
  const maxLen = window.innerWidth > 600 ? 10 : 4;
  if (title.split(/\s+/).length > maxLen) {
    title = (title.split(/\s+/).slice(0,maxLen).join(' ') + '...');
  }
  return (
    <li key={index}>
      <Link to={`/threads/${id}`}>{title}</Link>
    </li>
  );
};

export class RecentlyScored extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchRecent());
  };
    
  render() {
    const links = this.props.recentThreads.map((r, index) => {
      return makeLink(r.title, r.id, index);
    });
    return (
      <div className="recent-threads">
        <h5>Or, view one of the recently scored threads below</h5>
        <div className="links">
          <ul>
            {links}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  loading: state.hnData.loading,
  error: state.hnData.error,
  recentThreads: state.hnData.recentThreads,
});

export default withRouter(connect(mapStateToProps)(RecentlyScored));
