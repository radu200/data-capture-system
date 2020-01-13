import React from 'react';
import PropTypes from 'prop-types'
import CaptureForm from '../forms/DataCapture';
import NavBar from '../navbar/NavBar';
import c from '../scss/container.module.scss';

export const CapturePage = ({ onChange, onSubmit, attendeeD, emailVal }) => {
  const  name = attendeeD && attendeeD.name

  return (
    <>
      <NavBar />
      <div className={c.container}>
        <h2>Hello Mr. {name} </h2>
        <CaptureForm onChange={onChange} onSubmit={onSubmit} emailVal={emailVal} />
      </div>
    </>
  );
};

CapturePage.propTypes = {
   onChange: PropTypes.func,
   onSubmit: PropTypes.func,
   attendeeD: PropTypes.object
};
export default CapturePage;
