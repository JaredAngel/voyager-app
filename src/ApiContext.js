import React from 'react';

export default React.createContext({
  activities: [],
  voyages: [],
  addVoyage: () => {},
  addActivities: () => {},
  deleteActivity: () => {},
});