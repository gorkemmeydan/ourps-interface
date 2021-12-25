import React, { useEffect, useState } from 'react';

import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';

import Identicon from '../identicon/identicon.component';

import './wallet-info.styles.scss';

interface Props {
  provider: Web3Provider | undefined;
}

const WalletInfo: React.FC<Props> = ({ provider }: Props) => {
  const [account, setAccount] = useState('');
  const [etherBalance, setEtherBalance] = useState(0);

  const getAccount = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        return;
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      setAccount(accounts[0]);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  };

  const getBalance = async () => {
    if (account === '') return;
    provider?.getBalance(account).then((balance: any) => {
      // convert a currency unit from wei to ether
      const balanceInEth = ethers.utils.formatEther(balance);
      setEtherBalance(parseFloat(balanceInEth.replace(',', '.')));
    });
  };

  useEffect(() => {
    getAccount();
  }, []);

  useEffect(() => {
    getBalance();
  });

  return (
    <div className='wallet-info'>
      <div className='user-balance'>
        {etherBalance && etherBalance.toFixed(3)} ETH
      </div>
      <div className='user-account'>
        {account &&
          `${account.slice(0, 6)}...${account.slice(
            account.length - 4,
            account.length,
          )}`}
        <Identicon />
      </div>
    </div>
  );
};

export default WalletInfo;
