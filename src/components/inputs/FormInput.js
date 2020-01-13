import React from 'react';
import PropTypes from 'prop-types';
import style from './FormInput.module.scss';

const FormInput = ({ title, name, type, placeholder, onChange, value }) => {
  return (
    <>
      <label className={style.title} htmlFor={name}>{title}</label>
      <input
        className={style.formInput}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

FormInput.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default FormInput;
