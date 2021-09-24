import React from 'react';

import './remaining-time.styles.scss';

const RemainingTime: React.FC = () => {
  const dummyRemainingTime = '03:21';

  return <div className='remaining-time'>{dummyRemainingTime}</div>;
};

export default RemainingTime;
