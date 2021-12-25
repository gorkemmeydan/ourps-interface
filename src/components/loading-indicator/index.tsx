/* eslint-disable */
import React from 'react';
import './loading-indicator.styles.scss';

const LoadingIndicator = () => {
  return (
    <div className='lds-ring'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingIndicator;
