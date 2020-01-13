import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import EventAttendeePage from './../components/pages/EventAttendeeList';
import { fetchAttendees } from './../redux/attendees/operators';
import { getAttendee } from './../redux/attendees/actions';

import {
  attendeeSelector,
  loaderSelector,
} from './../redux/attendees/selectors';

const EventAttendeeList = ({
  fetchAttendees,
  attendees,
  loading,
  getAttendee,
  history,
}) => {
    
  useEffect(() => {
    fetchAttendees();
  }, [fetchAttendees]);

  const handleAttendee = id => {
    getAttendee(id);
    history.push('/capture');
  };

  return (
    <EventAttendeePage
      attendees={attendees}
      loading={loading}
      handleAttendee={handleAttendee}
    />
  );
};

const mapState = state => ({
  attendees: attendeeSelector(state),
  loading: loaderSelector(state),
});

export default connect(mapState, { fetchAttendees, getAttendee })(
  EventAttendeeList,
);
