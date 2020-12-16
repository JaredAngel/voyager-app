import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ApiContext from '../ApiContext';
import { countActivitiesForVoyage } from '../activities-helper';
import './ActivityListNav.css';

class ActivityListNav extends React.Component {
  static contextType = ApiContext;

  render() {
    const { voyages = [], activities = [] } = this.context;

    return (
      <div className='ActivityListNav'>
        <h2 className='ActivityListNav__header'>
          <NavLink to='/'>My Voyages</NavLink>
        </h2>
        <ul className='ActivityListNav__list'>
          {voyages.map(voyage => 
            <li key={voyage.id}>
              <NavLink
                className='ActivityListNav__voyage-link'
                to={`/voyage/${voyage.id}`}
              >
                <span className='ActivityListNav__num-activities'>
                  {countActivitiesForVoyage(activities, voyage.id)}
                </span>
                {voyage.name}
              </NavLink>
            </li>
          )}
        </ul>
        <div className='ActivityListNav__button-wrapper'>
          <button
            className='ActivityListNav__add-voyage-button'
            type='button'
            tag={Link}
            to='/add-voyage'
          >
            Add Voyage
          </button>
        </div>
      </div>
    );
  }
}

export default ActivityListNav;