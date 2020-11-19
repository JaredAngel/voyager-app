import React from 'react';
import {Route, Link} from 'react-router-dom';
import ActivityListNav from '../ActivityListNav/ActivityListNav';
import ActivityPageNav from '../ActivityPageNav/ActivityPageNav';
import ActivityListMain from '../ActivityListMain/ActivityListMain';
import ActivityPageMain from '../ActivityPageMain/ActivityPageMain';
import { findActivity, findVoyage, getActivitiesForVoyage } from '../activities-helper';
import './App.css';

import STORE from '../STORE';


class App extends React.Component {
  state = {
    voyages: [],
    activities: []
  };

  componentDidMount() {
    // fake data loading from API call
    setTimeout(() => this.setState(STORE), 600);
  }

  renderNavRoutes() {
    const { voyages, activities } = this.state;
    return (
      <>
        {['/', '/voyage/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => (
              <ActivityListNav
              voyages={voyages}
              activities={activities}
              />
            )}
          />
        ))}
        <Route
          path='/activity/:activityId'
          render={routeProps => {
            const { activityId } = routeProps.match.params;
            const activity = findActivity(activities, activityId) || {};
            const voyage = findVoyage(voyages, activity.voyageId);

            return (
              <ActivityPageNav {...routeProps} voyage={voyage} />
            );
          }}
        />
        <Route path='/add-voyage' component={ActivityPageNav} />
        <Route path='/add-activity' component={ActivityPageNav} />
      </>
    );
  }

  renderMainRoutes() {
    const { activities } = this.state;
    return (
      <>
        {['/', '/voyage/:voyageId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => {
              const {voyageId} = routeProps.match.params;
              const activitiesForVoyage = getActivitiesForVoyage(
                activities,
                voyageId
              );

              return (
                <ActivityListMain
                  {...routeProps}
                  activities={activitiesForVoyage}
                />
              );
            }}
          />
        ))}
        <Route
          path='/activity/:activityId'
          render={routeProps => {
            const { activityId } = routeProps.match.params;
            const activity = findActivity(activities, activityId);
            
            return (
              <ActivityPageMain
                {...routeProps}
                activity={activity}
              />
            );
          }} 
        />
      </>
    );
  }

  render() {
    return (
      <div className='App'>
        <nav className='App__nav'>
          {this.renderNavRoutes()}
        </nav>
        <header className='App__header'>
          <h1>
            <Link to='/'>Voyager</Link>
            {/* <p>TO-DO: Add icon here</p> */}
          </h1>
        </header>
        <main className='App__main'>
          {this.renderMainRoutes()}
        </main>
      </div>
    );
  }
  
}

export default App;
