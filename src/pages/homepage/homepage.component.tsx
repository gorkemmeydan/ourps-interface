import React from 'react';

import Header from '../../components/header/header.component';
import ProgressBar from '../../components/progress-bar/progress-bar.component';
import RemainingTime from '../../components/remaining-time/remaining-time.component';
import Ballot from '../../components/ballot/ballot.component';

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
  </div>
);

export default HomePage;
