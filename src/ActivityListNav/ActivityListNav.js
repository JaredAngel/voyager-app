import React from 'react';
import { NavLink } from 'react-router-dom';

import { countActivitiesForVoyage } from '../activities-helper';

class ActivityListNav extends React.Component {
  render() {
    return (
      <div className='ActivityListNav'>
        <ul className='ActivityListNav__list'>
          {this.props.voyages.map(voyage => 
            <li key={voyage.id}>
              <NavLink
                className='ActivityListNav__voyage-link'
                to={`/voyage/${voyage.id}`}
              >
                <span className='ActivityListNav__num-activities'>
                  {countActivitiesForVoyage(this.props.activities, voyage.id)}
                </span>
                {voyage.name}
              </NavLink>
            </li>
          )}
        </ul>
        <div className='ActivityListNav__button-wrapper'>
          <button
            type='button'
            className='ActivityListNav__add-folder-button'
          >
            Add Voyage
          </button>
        </div>
      </div>
    );
  }
}

ActivityListNav.defaultProps = {
  voyages: [],
};

export default ActivityListNav;