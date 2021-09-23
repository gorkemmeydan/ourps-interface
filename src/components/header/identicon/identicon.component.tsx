import React, { useEffect, useRef } from 'react';

import Jazzicon from '@metamask/jazzicon';
import { useEthers } from '@usedapp/core';

const Identicon: React.FC = () => {
  const ref = useRef<HTMLDivElement>();
  const { account } = useEthers();

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
