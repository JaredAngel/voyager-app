import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActivityPageNav.css';

class ActivityPageNav extends React.Component {
  render() {
    return (
      <div className='ActivityPageNav'>
        <h2 className='ActivityPageNav__header'>
          <NavLink
            to={`/voyage/${this.props.voyage.id}`}
          >
            {this.props.voyage.name}
          </NavLink>
        </h2>
        <ul className='ActivityPageNav__list'>
          {this.props.activities.map(activity =>
            <li key={activity.id}>
              <NavLink
                className='ActivityPageNav__activity-link'
                to={`/activity/${activity.id}`}
              >
                {activity.name}
              </NavLink>
            </li>
          )}
        </ul>
        <button
          className='ActivityPageNav__back-button'
          onClick={() => this.props.history.goBack()}
        >
          <br />
          Back
        </button>
      </div>
    );
  }
}

ActivityPageNav.defaultProps = {
  history: {
    goBack: () => {}
  }
};

export default ActivityPageNav;