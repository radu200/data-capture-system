import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.scss'

const Button = ({ name, type, onClick, disable}) => {
  return (
    <button className={style.btn} disable={disable} onClick={onClick} type={type}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool
};
export default Button;
