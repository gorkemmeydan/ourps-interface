import React from 'react';

import './history-element.styles.scss';

interface Props {
  team: 'red' | 'blue' | 'draw';
  backgroundUrl?: string;
}

const HistoryElement: React.FC<Props> = ({ team, backgroundUrl }: Props) => (
  <div className={`${team} history-element`}>
    {team !== 'draw' ? (
      <img
        className='history-image'
        src={backgroundUrl}
        alt='rock-paper-scissors'
      />
    ) : null}
  </div>
);

HistoryElement.defaultProps = {
  backgroundUrl: '',
};

export default HistoryElement;
