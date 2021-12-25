import React from 'react';

import styles from './history-element.module.scss';

interface Props {
  team: 'red' | 'blue' | 'draw';
  winCount: string;
}

const HistoryElement: React.FC<Props> = ({ team, winCount }: Props) => (
  <div className={styles.historyElement}>
    <div className={`${styles[team]} ${styles.writing}`}>
      {team.toUpperCase()} : {winCount}
    </div>
  </div>
);

export default HistoryElement;
