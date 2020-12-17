import React from 'react';
import {Route, Link} from 'react-router-dom';
import ActivityListNav from '../ActivityListNav/ActivityListNav';
import ActivityPageNav from '../ActivityPageNav/ActivityPageNav';
import ActivityListMain from '../ActivityListMain/ActivityListMain';
import ActivityPageMain from '../ActivityPageMain/ActivityPageMain';
import AddVoyage from '../AddVoyage/AddVoyage';
import AddActivity from '../AddActivity/AddActivity';
import ApiContext from '../ApiContext';
import config from '../config';
import './App.css';

class App extends React.Component {
  state = {
    voyages: [],
    activities: []
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/activities`),
      fetch(`${config.API_ENDPOINT}/voyages`)
    ])
      .then(([activitiesRes, voyagesRes]) => {
        if(!activitiesRes.ok) {
          return activitiesRes
            .json()
            .then(e =>
              Promise.reject(e)
            );
        }
        if(!voyagesRes.ok) {
          return voyagesRes
            .json()
            .then(e =>
              Promise.reject(e)
            );
        }
        return Promise.all([
          activitiesRes.json(),
          voyagesRes.json(),
        ]);
      })
      .then(([activities, voyages]) => {
        this.setState({ activities, voyages })
      })
      .catch(error => {
        console.error({ error })
      });
  }

  handleAddVoyage = voyage => {
    this.setState({
      voyages: [
        ...this.state.voyages,
        voyage
      ]
    });
  }

  handleAddActivity = activity => {
    this.setState({
      activities: [
        ...this.state.activities,
        activity
      ]
    });
  }

  handleDeleteActivity = activityId => {
    this.setState({
      activities: this.state.activities.filter(activity => activity.id !== activityId)
    });
  }

  renderNavRoutes() {
    return (
      <>
        {['/', '/voyage/:voyageId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={ActivityListNav}
          />
        ))}
        <Route
          path='/activity/:activityId'
          component={ActivityPageNav}
        />
        <Route
          path='/add-voyage'
          component={ActivityPageNav}
        />
        <Route
          path='/add-activity'
          component={ActivityPageNav}
        />
      </>
    );
  }

  renderMainRoutes() {
    return (
      <>
        {['/', '/voyage/:voyageId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={ActivityListMain}
          />
        ))}
        <Route
          path='/activity/:activityId'
          component={ActivityPageMain}
        />
        <Route
          path='/add-voyage'
          component={AddVoyage}
        />
        <Route
          path='/add-activity'
          component={AddActivity}
        />
      </>
    );
  }

  render() {
    const value = {
      activities: this.state.activities,
      voyages: this.state.voyages,
      addVoyage: this.handleAddVoyage,
      addActivity: this.handleAddActivity,
      deleteActivity: this.handleDeleteActivity,
    };

    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
        <nav className='App__nav'>
          {this.renderNavRoutes()}
        </nav>
        <header className='App__header'>
          <h1>
            <Link to='/'>Voyager</Link>
            {' '}
          </h1>
        </header>
        <main className='App__main'>
          {this.renderMainRoutes()}
        </main>
      </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
