import React from 'react';
import Activity from '../Activity/Activity';
import './ActivityListMain.css';

class ActivityListMain extends React.Component {
  render() {
    return (
      <section className='ActivityListMain'>
        <div className='ActivityListMain__button-container'>
          <button
            className='ActivityListMain__add-activity-button'
            type='button'
          >
            Add Activity
          </button>
        </div>
        <ul>
          {this.props.activities.map(activity =>
            <li key={activity.id}>
              <Activity
                id={activity.id}
                name={activity.name}
                modified={activity.modified}
                tag={activity.tag}
              />
            </li>
          )}
        </ul>
      </section>
    );
  }
}

ActivityListMain.defaultProps = {
  activities: [],
}

export default ActivityListMain;