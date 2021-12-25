import React from 'react';

import { ReactComponent as MetaMaskLogo } from '../../assets/metamask-fox.svg';

import styles from './connect-wallet-button.module.scss';

interface Props {
  setCurrentAccount: (account: any) => void;
  isCorrect: boolean;
}

const ConnectWalletButton: React.FC<Props> = ({
  setCurrentAccount,
  isCorrect,
}: Props) => {
  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        return;
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  };

  return (
    <button
      type='button'
      className={styles.connectWalletButton}
      onClick={connectWalletAction}
      disabled={!isCorrect}
    >
      <div className={styles.buttonText}>Connect with MetaMask</div>
      <MetaMaskLogo className={styles.logo} />
    </button>
  );
};

export default ConnectWalletButton;
