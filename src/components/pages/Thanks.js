import React from 'react';
import NavBar from './../navbar/NavBar';
import style from './Thanks.module.scss';
import c from '../scss/container.module.scss';
import withTimeOut from '../../HOC/TimeOut'

export const Thanks = () => {
  return (
    <>
      <NavBar />
      <div className={c.container}>
        <p className={style.msgSuccess}> Thanks for signing up </p>
     </div>
    </>
  );
};

export default withTimeOut(Thanks)
