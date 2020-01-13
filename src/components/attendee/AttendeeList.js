import React from 'react';
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

export default EventAttendeeList;
