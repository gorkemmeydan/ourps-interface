import React, { useEffect, useRef } from 'react';

import Jazzicon from '@metamask/jazzicon';
// import { useEthers } from '@usedapp/core';

const Identicon: React.FC = () => {
  const ref = useRef<HTMLDivElement>();
  // const { account } = useEthers();
  const account = '0x771EB828646f62eFb75b190aA3C2037CbF3546CA';


  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = '';
      ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)));
    } else if (!account && ref.current) {
      ref.current?.removeChild(ref.current.children[0]);
    }
  }, [account]);

  return <div className='identicon' ref={ref as any} />;
};

export default Identicon;
