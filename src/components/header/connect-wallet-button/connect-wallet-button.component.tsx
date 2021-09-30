import React from 'react';

import { useEthers } from '@usedapp/core';

import { ReactComponent as MetaMaskLogo } from '../../../assets/metamask-fox.svg';

import styles from './connect-wallet-button.module.scss';

const ConnectWalletButton: React.FC = () => {
  const { activateBrowserWallet } = useEthers();

  const handleConnectWallet = () => {
    activateBrowserWallet();
  };

  return (
    <button
      type='button'
      className={styles.connectWalletButton}
      onClick={handleConnectWallet}
    >
      <div className={styles.buttonText}>Connect with MetaMask</div>
      <MetaMaskLogo className={styles.logo} />
    </button>
  );
};

export default ConnectWalletButton;
