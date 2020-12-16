import React from 'react';
import { Link } from 'react-router-dom';
import Activity from '../Activity/Activity';
import ApiContext from '../ApiContext'
import { getActivitiesForVoyage } from '../activities-helper';
import './ActivityListMain.css';

class ActivityListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };
  static contextType = ApiContext;

  render() {
    const { voyageId } = this.props.match.params;
    const { activities = [] } = this.context;
    const activitiesForVoyage = getActivitiesForVoyage(activities, voyageId);

    return (
      <section className='ActivityListMain'>
        <div className='ActivityListMain__button-container'>
          <button
            className='ActivityListMain__add-activity-button'
            type='button'
            tag={Link}
            to='/add-activity'
          >
            Add Activity
          </button>
        </div>
        <ul>
          {activitiesForVoyage.map(activity =>
            <li key={activity.id}>
              <Activity
                id={activity.id}
                name={activity.name}
                tag={activity.tag}
              />
            </li>
          )}
        </ul>
      </section>
    );
  }
}

export default ActivityListMain;