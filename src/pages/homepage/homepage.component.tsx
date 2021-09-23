import React from 'react';

import Header from '../../components/header/header.component';

import './homepage.styles.scss';

const HomePage: React.FC = () => (
  <div className='homepage'>
    <div className='header-container'>
      <Header />
    </div>
  </div>
);

export default HomePage;
