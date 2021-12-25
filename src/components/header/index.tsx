import React from 'react';

import { Web3Provider } from '@ethersproject/providers';

import WalletInfo from './wallet-info/wallet-info.component';

import styles from './header.module.scss';

interface HeaderProps {
  withAccountInfo: boolean;
  provider: Web3Provider | undefined;
}

const Header: React.FC<HeaderProps> = ({
  withAccountInfo,
  provider,
}: HeaderProps) => (
  <div className={styles.header}>
    <div className={styles.appName}>
      OuRPS - Decentralized Rock, Paper, Scissors!
    </div>
    <div className={styles.userOperations}>
      {withAccountInfo ? <WalletInfo provider={provider} /> : null}
    </div>
  </div>
);

export default Header;
