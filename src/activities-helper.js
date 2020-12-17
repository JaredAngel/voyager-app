export const findVoyage = (voyages=[], voyageId) => {
  return voyages.find(voyage => voyage.id === parseInt(voyageId));
};

export const findActivity = (activities=[], activityId) => {
  return activities.find(activity => activity.id === parseInt(activityId));
}

export const getActivitiesForVoyage = (activities=[], voyageId) => {
  if(!voyageId) {
    return activities;
  } else {
    return activities.filter(activity => activity.voyage_id === parseInt(voyageId));
  }
};

export const countActivitiesForVoyage = (activities=[], voyageId) => {
  return activities.filter(activity => activity.voyage_id === voyageId).length;
};

