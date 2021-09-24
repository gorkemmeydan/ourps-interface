import React from 'react';

import Header from '../../components/header/header.component';
import ProgressBar from '../../components/progress-bar/progress-bar.component';
import RemainingTime from '../../components/remaining-time/remaining-time.component';
import Ballot from '../../components/ballot/ballot.component';
import RoundHistory from '../../components/round-history/round-history.component';

import './homepage.styles.scss';

const HomePage: React.FC = () => (
  <div className='homepage'>
    <div className='header-container'>
      <Header />
    </div>
    <RemainingTime />
    <div className='bar'>
      <ProgressBar />
    </div>
    <div className='ballots'>
      <Ballot team='red' />
      <Ballot team='blue' />
    </div>
    <div className='round-history-text'>Round History</div>
    <div className='round-history-container'>
      <RoundHistory />
    </div>
  </div>
);

export default HomePage;
