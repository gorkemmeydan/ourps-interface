import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import { Contract } from '@ethersproject/contracts';

import ConnectWalletButton from '../../components/connect-wallet-button';
import Footer from '../../components/footer';
import Header from '../../components/header';
import RoundHistory from '../../components/round-history';
import Ballot from '../../components/ballot';
import RemainingTime from '../../components/remaining-time';

import CONTRACT_ADDRESS from '../../contracts/ourps/ourps.address';
import OURPS_ABI from '../../contracts/ourps/ourps.abi';

import styles from './homepage.module.scss';

const HomePage: React.FC = () => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);
  const [errorMsg, setError] = useState('');
  const [provider, setProvider] = useState<Web3Provider>();
  const [contract, setContract] = useState<Contract>();
  const [roundEnded, setRoundEnded] = useState(true);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        setError('Make sure you have MetaMask!');
      } else {
        setError('');

        // Add listeners start
        ethereum.on('accountsChanged', (accs: any) => {
          setCurrentAccount(accs[0]);
        });
        ethereum.on('chainChanged', () => {
          window.location.reload();
        });

        const networkId = await window.ethereum.request({
          method: 'net_version',
        });

        if (networkId !== '3') {
          setError('Change network to Ropsten!');
          setIsCorrectNetwork(false);
          return;
        }
        setIsCorrectNetwork(true);

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        if (accounts.length !== 0) {
          const account = accounts[0];
          setCurrentAccount(account);
        }
      }
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    const newProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(newProvider);

    const signer = newProvider.getSigner();
    const gameContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      OURPS_ABI,
      signer,
    );
    setContract(gameContract);
  }, [currentAccount]);

  const renderNotConnected = () => (
    <>
      <Header withAccountInfo={false} provider={provider} />
      <div className={styles.notConnected}>
        <div className={styles.errorMsg}>{errorMsg}</div>
        <ConnectWalletButton
          setCurrentAccount={setCurrentAccount}
          isCorrect={isCorrectNetwork}
        />
      </div>
    </>
  );

  const renderConnected = () => (
    <>
      <Header withAccountInfo provider={provider} />
      <RemainingTime contract={contract} setRoundEndStatus={setRoundEnded} />
      <div className={styles.ballots}>
        <Ballot team='red' contract={contract} deactive={roundEnded} />
        <Ballot team='blue' contract={contract} deactive={roundEnded} />
      </div>
      <div className={styles.roundHistoryText}>Round History</div>
      <div className={styles.roundHistoryContainer}>
        <RoundHistory contract={contract} />
      </div>
    </>
  );

  const renderContent = () =>
    currentAccount ? renderConnected() : renderNotConnected();

  return (
    <div className={styles.homepage}>
      {renderContent()}
      <Footer />
    </div>
  );
};

export default HomePage;
