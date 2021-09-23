import React from 'react';

import { ReactComponent as MetaMaskLogo } from '../../../assets/metamask-fox.svg';

import './connect-wallet-button.styles.scss';

const ConnectWalletButton: React.FC = () => (
  <button type='button' className='connect-wallet-button'>
    <div className='button-text'>Connect with MetaMask</div>
    <MetaMaskLogo className='logo' />
  </button>
);

export default ConnectWalletButton;
