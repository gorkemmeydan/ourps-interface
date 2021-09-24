import React, { useState } from 'react';

import './progress-bar.styles.scss';

const ProgressBar: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [percentage, setPercentage] = useState(75);

  return (
    <div className='progress-bar'>
      <div className='remaining' style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default ProgressBar;
