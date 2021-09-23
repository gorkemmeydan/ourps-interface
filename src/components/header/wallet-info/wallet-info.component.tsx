import React from 'react';

import { useEthers, useEtherBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';

import './wallet-info.styles.scss';
import Identicon from '../identicon/identicon.component';

const WalletInfo: React.FC = () => {
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <div className='wallet-info'>
      <div className='user-balance'>
        {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
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
