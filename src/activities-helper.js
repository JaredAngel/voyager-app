export const findVoyage = (voyages=[], voyageId) => {
  return voyages.find(voyage => voyage.id === voyageId);
};

export const findActivity = (activities=[], activityId) => {
  return activities.find(activity => activity.id === activityId);
}

export const getActivitiesForVoyage = (activities=[], voyageId) => {
  if(!voyageId) {
    return activities;
  } else {
    return activities.filter(activity => activity.voyageId === voyageId);
  }
};

export const countActivitiesForVoyage = (activities=[], voyageId) => {
  return activities.filter(activity => activity.voyageId === voyageId).length;
};

