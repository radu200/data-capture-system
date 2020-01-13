import React from 'react';
import PropTypes from 'prop-types'
import Input from '../inputs/FormInput';
import Button from '../inputs/Button';
import style from './forms.module.scss';

export const DataCapture = ({ onSubmit, onChange, emailVal }) => {
  return (
    <form className={style.formContainer} onSubmit={onSubmit}>
      <Input
        title="Enter email"
        name="email"
        type="email"
        onChange={onChange}
        value={emailVal}
        required
      />
      <Input
        title="Enter Post Code"
        name="postcode"
        type="text"
        onChange={onChange}
      />
      <Input
        title="Would you like to receive email with best offers ?"
        name="optedin"
        type="checkbox"
        onChange={onChange}
      />
      <Button type="submit" name="Save" />
    </form>
  );
};

DataCapture.propTypes = {
   onChange: PropTypes.func,
   onSubmit: PropTypes.func,
   optedin: PropTypes.bool,
   emailVal: PropTypes.string
}

export default DataCapture;
