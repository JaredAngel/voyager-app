import React from 'react';
import Activity from '../Activity/Activity';
import ApiContext from '../ApiContext';
import { findActivity } from '../activities-helper';
import './ActivityPageMain.css';

class ActivityPageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };
  static contextType = ApiContext;

  handleDeleteActivity = activityId => {
    this.props.history.push(`/`)
  }

  render() {
    const { activities = [] } = this.context;
    const { activityId } = this.props.match.params;
    const activity = findActivity(activities, parseInt(activityId)) || { content: '' };

    return (
      <section className='ActivityPageMain'>
        <div className='ActivityListMain__button-container'>
          <button
            className='ActivityListMain__add-activity-button'
            type='button'
            onClick={e => {
              this.props.history.push('/add-activity')
            }}
            to='/add-activity'
          >
            Add Activity
          </button>
        </div>
        <Activity
          id={activity.id}
          title={activity.title}
          label={activity.label}
          onDeleteActivity={this.handleDeleteActivity}
        />
        <div className='ActivityPageMain__content'>
          {activity.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    );
  }
}

export default ActivityPageMain;