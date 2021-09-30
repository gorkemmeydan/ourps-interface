import React from 'react';

import { useEthers } from '@usedapp/core';

import ConnectWalletButton from './connect-wallet-button/connect-wallet-button.component';
import WalletInfo from './wallet-info/wallet-info.component';

import styles from './header.module.scss';

const Header: React.FC = () => {
  const { account } = useEthers();

  return (
    <div className={styles.header}>
      <div className={styles.appName}>
        OuRPS - Decentralized Rock, Paper, Scissors!
      </div>
      <div className={styles.userOperations}>
        {account ? <WalletInfo /> : <ConnectWalletButton />}
      </div>
    </div>
  );
};

export default Header;
