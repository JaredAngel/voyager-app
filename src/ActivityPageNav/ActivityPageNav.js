import React from 'react';
import { NavLink } from 'react-router-dom';
import ApiContext from '../ApiContext';
import { findActivity, findVoyage } from '../activities-helper';
import './ActivityPageNav.css';

class ActivityPageNav extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => { }
    },
    match: {
      params: {}
    }
  };
  static contextType = ApiContext;

  render() {
    const { activities, voyages } = this.context;
    const { activityId } = this.props.match.params;
    const activity = findActivity(activities, activityId) || {};
    const voyage = findVoyage(voyages, activity.voyageId);

    return (
      <div className='ActivityPageNav'>
        {/* <h2 className='ActivityPageNav__header'>
          <NavLink
            to={`/voyage/${activity.voyageId}`}
          >
            {voyage.title}
          </NavLink>
        </h2> */}
        <ul className='ActivityPageNav__list'>
          {activities.map(activity =>
            <li key={activity.id}>
              <NavLink
                className='ActivityPageNav__activity-link'
                to={`/activity/${activity.id}`}
              >
                {activity.title}
              </NavLink>
            </li>
          )}
        </ul>
        <button
          className='ActivityPageNav__back-button'
          onClick={() => this.props.history.goBack()}
          role='link'
          tag='button'
        >
          <br />
          Back
        </button>
        {voyage && (
          <h3 className='ActivityPageNav__voyage-title'>
            {voyage.title}
          </h3>
        )}
      </div>
    );
  }
}

export default ActivityPageNav;