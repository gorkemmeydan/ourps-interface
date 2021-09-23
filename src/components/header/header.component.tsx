import React from 'react';

import { useEthers } from '@usedapp/core';

import ConnectWalletButton from './connect-wallet-button/connect-wallet-button.component';
import WalletInfo from './wallet-info/wallet-info.component';

import './header.styles.scss';

const Header: React.FC = () => {
  const { account } = useEthers();

  return (
    <div className='header'>
      <div className='app-name'>
        OuRPS - Decentralized Rock, Paper, Scissors!
      </div>
      <div className='user-operations'>
        {account ? <WalletInfo /> : <ConnectWalletButton />}
      </div>
    </div>
  );
};

export default Header;
