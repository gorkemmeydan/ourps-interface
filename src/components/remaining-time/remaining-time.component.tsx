import React from 'react';

import useRoundEndTimestamp from '../../hooks/useRoundEndTimestamp';

import './remaining-time.styles.scss';

const RemainingTime: React.FC = () => {
  const time = useRoundEndTimestamp();

  let convertedTime = '';
  if (time !== undefined) {
    const currentTime = new Date().valueOf() / 1000;

    if (currentTime > time) {
      convertedTime = 'round has been ended';
    } else {
      const diffTime = time - currentTime;
      convertedTime = new Date(diffTime * 1000).toLocaleString();
    }
  }

  return <div className='remaining-time'>{convertedTime}</div>;
};

export default RemainingTime;
