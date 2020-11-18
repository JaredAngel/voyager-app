import React from 'react';
import Activity from '../Activity/Activity';

class ActivityListMain extends React.Component {
  render() {
    return (
      <section className='ActivityListMain'>
        <ul>
          {this.props.activities.map(activity =>
            <li key={activity.id}>
              <Activity
                id={activity.id}
                name={activity.name}
                modified={activity.modified}
              />
            </li>
          )}
        </ul>
        <div className='ActivityListMain__button-container'>
          <button
            className='ActivityListMain__add-activity-button'
            type='button'
          >
            Add Activity
          </button>
        </div>
      </section>
    );
  }
}

ActivityListMain.defaultProps = {
  activities: [],
}

export default ActivityListMain;