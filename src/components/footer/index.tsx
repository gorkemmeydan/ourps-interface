import React from 'react';

import styles from './footer.module.scss';

const Footer: React.FC = () => (
  <div className={styles.footerWrapper}>
    Build by
    <a href='https://github.com/gorkemmeydan' rel='noreferrer' target='_blank'>
      @gorkemmeydan
    </a>
    and
    <a href='https://github.com/yagizsenal' rel='noreferrer' target='_blank'>
      @yagizsenal
    </a>
  </div>
);

export default Footer;
