import React from 'react';

import Header from '../../components/header/header.component';
import ProgressBar from '../../components/progress-bar/progress-bar.component';
import RemainingTime from '../../components/remaining-time/remaining-time.component';
import Ballot from '../../components/ballot/ballot.component';
import RoundHistory from '../../components/round-history/round-history.component';

import useRedTeamVotes from '../../hooks/useRedTeamVotes';

import styles from './homepage.module.scss';

const HomePage: React.FC = () => {
  const redVotes = useRedTeamVotes();

  // eslint-disable-next-line no-console
  console.log('red vote: ', redVotes);

  return (
    <div className={styles.homepage}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <RemainingTime />
      <div className={styles.bar}>
        <ProgressBar />
      </div>
      <div className={styles.ballots}>
        <Ballot team='red' votes={redVotes} />
        <Ballot team='blue' votes={redVotes} />
      </div>
      <div className={styles.roundHistoryText}>Round History</div>
      <div className={styles.roundHistoryContainer}>
        <RoundHistory />
      </div>
    </div>
  );
};

export default HomePage;
