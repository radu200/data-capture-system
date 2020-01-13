import { createSelector } from 'reselect';

export const attendeeSelector = state => state.attendees.attendees;
export const loaderSelector = state => state.attendees.loading;

const attendeeId = state => state.attendees.attendeeId;

export const getAttendeeDetails = createSelector(
  attendeeId,
  attendeeSelector,
  (id, list) => {
    return list && list.find(a => (a.id === id ? a : null));
  },
);
