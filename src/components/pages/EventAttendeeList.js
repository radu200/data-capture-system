import React from 'react';
import PropTypes from 'prop-types';
import style from './EventAttendeeList.module.scss';
import c from '../scss/container.module.scss';
import NavBar from './../navbar/NavBar';
import AttendeeList from '../attendee/AttendeeList';
import Loader from '../utils/Loader';

const EventAttendeeList = ({ attendees, loading, handleAttendee }) => {
  return (
    <>
      <NavBar />
      {loading ? (
        <Loader />
      ) : (
        <div className={c.container}>
          <>
            <h2 className={style.title}>Attendee List</h2>
            <AttendeeList attendees={attendees} handleAttendee={handleAttendee} />
          </>
        </div>
      )}
    </>
  );
};

EventAttendeeList.propTypes = {
  attendees: PropTypes.array,
  handleAttendee:PropTypes.func,
  loading:PropTypes.bool
};
export default EventAttendeeList;
