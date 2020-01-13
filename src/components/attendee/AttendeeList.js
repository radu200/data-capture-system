import React from 'react';
import PropTypes from 'prop-types';
import style from './AttendeeList.module.scss';

const EventAttendeeList = ({ attendees, handleAttendee }) => {
  return (
    <>
      {attendees && attendees.map(a => (
        <ul className={style.container} key={a.id}>
          <li onClick={() => handleAttendee(a.id) }  className={style.attendeeList}>{a.name}</li>
        </ul>
      ))}
    </>
  );
};

EventAttendeeList.propTypes  = {
   attendees: PropTypes.array,
   handleAttendee: PropTypes.func
}

export default EventAttendeeList;
