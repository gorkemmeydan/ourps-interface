import React from 'react';

import styles from './history-element.module.scss';

interface Props {
  team: 'red' | 'blue' | 'draw';
  backgroundUrl?: string;
}

const HistoryElement: React.FC<Props> = ({ team, backgroundUrl }: Props) => (
  <div className={`${styles[team]} ${styles.historyElement}`}>
    {team !== 'draw' ? (
      <img
        className={styles.historyImage}
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
