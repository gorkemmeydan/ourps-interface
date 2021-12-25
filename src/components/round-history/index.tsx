import React, { useEffect, useState } from 'react';
import { Contract } from 'ethers';

import HistoryElement from './history-element/history-element.component';

import styles from './round-history.module.scss';

interface Props {
  contract: Contract | undefined;
}

const RoundHistory: React.FC<Props> = ({ contract }: Props) => {
  const [history, setHistory] = useState(['0', '0', '0']);

  const getHistory = async () => {
    if (contract) {
      const results = await contract.getResults();
      setHistory(results.toString().split(','));
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div className={styles.roundHistory}>
      <HistoryElement team='red' winCount={history[0]} />
      <HistoryElement team='blue' winCount={history[1]} />
      <HistoryElement team='draw' winCount={history[2]} />
    </div>
  );
};

export default RoundHistory;
