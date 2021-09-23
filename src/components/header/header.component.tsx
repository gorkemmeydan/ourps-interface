import React from 'react';

import ConnectWalletButton from './connect-wallet-button/connect-wallet-button.component';

import './header.styles.scss';

const Header: React.FC = () => (
  <div className='header'>
    <div className='app-name'>OuRPS - Decentralized Rock, Paper, Scissors!</div>
    <div className='user-operations'>
      <ConnectWalletButton />
    </div>
  </div>
);

export default Header;
