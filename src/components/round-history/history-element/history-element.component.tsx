import React from 'react';

import styles from './history-element.module.scss';

interface Props {
  team: 'red' | 'blue' | 'draw';
  winCount: number | undefined;
}

const HistoryElement: React.FC<Props> = ({ team, winCount }: Props) => (
  <div className={styles.historyElement}>
    <div className={`${styles[team]} ${styles.writing}`}>
      {team.toUpperCase()} : {winCount || '0'}
    </div>
  </div>
);

export default HistoryElement;
