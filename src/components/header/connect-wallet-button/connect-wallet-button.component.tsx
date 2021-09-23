import React from 'react';

import { useEthers } from '@usedapp/core';

import { ReactComponent as MetaMaskLogo } from '../../../assets/metamask-fox.svg';

import './connect-wallet-button.styles.scss';

const ConnectWalletButton: React.FC = () => {
  const { activateBrowserWallet } = useEthers();

  const handleConnectWallet = () => {
    activateBrowserWallet();
  };

  return (
    <button
      type='button'
      className='connect-wallet-button'
      onClick={handleConnectWallet}
    >
      <div className='button-text'>Connect with MetaMask</div>
      <MetaMaskLogo className='logo' />
    </button>
  );
};

export default ConnectWalletButton;
