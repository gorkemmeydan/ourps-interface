import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import HistoryElement from './history-element/history-element.component';

import rockUrl from '../../assets/rock-image.png';
import paperUrl from '../../assets/paper-image.png';
import scissorUrl from '../../assets/scissor-image.png';

import styles from './round-history.module.scss';

interface DummyType {
  team: 'red' | 'blue' | 'draw';
  type?: string;
}

const RoundHistory: React.FC = () => {
  const dummyHistory: DummyType[] = [
    { team: 'red', type: 'rock' },
    { team: 'red', type: 'scissors' },
    { team: 'draw', type: '' },
    { team: 'red', type: 'rock' },
    { team: 'blue', type: 'paper' },
    { team: 'draw', type: '' },
    { team: 'blue', type: 'scissors' },
    { team: 'red', type: 'paper' },
    { team: 'draw', type: '' },
    { team: 'draw', type: '' },
  ];

  return (
    <div className={styles.roundHistory}>
      {dummyHistory.map((history) => {
        if (history.team !== 'draw') {
          if (history.type === 'rock') {
            return (
              <HistoryElement
                key={uuidv4()}
                team={history.team}
                backgroundUrl={`../${rockUrl}`}
              />
            );
          }
          if (history.type === 'paper') {
            return (
              <HistoryElement
                key={uuidv4()}
                team={history.team}
                backgroundUrl={`../${paperUrl}`}
              />
            );
          }
          if (history.type === 'scissors') {
            return (
              <HistoryElement
                key={uuidv4()}
                team={history.team}
                backgroundUrl={`../${scissorUrl}`}
              />
            );
          }
          return null;
        }
        return <HistoryElement team='draw' key={uuidv4()} />;
      })}
    </div>
  );
};

export default RoundHistory;
