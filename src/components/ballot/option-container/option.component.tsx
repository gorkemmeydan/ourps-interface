import React from 'react';

import styles from './option.module.scss';

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
  <div className={`${styles[team]} ${styles.option}`}>
    <div className={styles.imageContainer}>
      <img
        className={styles.rpsImage}
        src={backgroundUrl}
        alt='rock-paper-scissors'
      />
    </div>
    <div className={styles.optionPercentage}>{percentage}%</div>
    <div className={styles.voteCount}>({voteCount})</div>
  </div>
);

export default Option;
