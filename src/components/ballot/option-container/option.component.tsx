import React from 'react';

import './option.styles.scss';

interface Props {
  team: 'red' | 'blue';
  percentage: number;
  voteCount: number;
  backgroundUrl: string;
}

const Option: React.FC<Props> = ({
  team,
  percentage,
  voteCount,
  backgroundUrl,
}: Props) => (
  <div className={`${team} option`}>
    <div className='image-container'>
      <img
        className='rps-image'
        src={backgroundUrl}
        alt='rock-paper-scissors'
      />
    </div>
    <div className='option-percentage'>{percentage}%</div>
    <div className='vote-count'>({voteCount})</div>
  </div>
);

export default Option;
