import React, { useState } from 'react';

import styles from './progress-bar.module.scss';

const ProgressBar: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [percentage, setPercentage] = useState(75);

  return (
    <div className={styles.progressBar}>
      <div className={styles.remaining} style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default ProgressBar;
