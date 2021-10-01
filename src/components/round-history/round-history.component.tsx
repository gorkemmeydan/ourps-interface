import React from 'react';

import HistoryElement from './history-element/history-element.component';

import styles from './round-history.module.scss';
import useRoundHistory from '../../hooks/useRoundHistory';

const RoundHistory: React.FC = () => {
  const roundHistory = useRoundHistory();

  return (
    <div className={styles.roundHistory}>
      <HistoryElement team='red' winCount={roundHistory.red} />
      <HistoryElement team='blue' winCount={roundHistory.blue} />
      <HistoryElement team='draw' winCount={roundHistory.draw} />
    </div>
  );
};

export default RoundHistory;
