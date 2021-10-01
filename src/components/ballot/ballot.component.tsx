import React from 'react';

import RockImage from '../../assets/rock-image.png';
import PaperImage from '../../assets/paper-image.png';
import ScissorImage from '../../assets/scissor-image.png';

import Option from './option-container/option.component';

import styles from './ballot.module.scss';

interface Props {
  team: 'red' | 'blue';
  votes: string[] | undefined;
}

const Ballot: React.FC<Props> = ({ team, votes }: Props) => (
  <div className={`${styles[team]} ${styles.ballot}`}>
    <div className={styles.teamName}>{team.toUpperCase()}</div>
    <div className={styles.rpsContainer}>
      <Option
        team={team}
        percentage={33}
        voteCount={votes ? votes[0] : '0'}
        backgroundUrl={`../${RockImage}`}
      />
      <Option
        team={team}
        percentage={33}
        voteCount={votes ? votes[1] : '0'}
        backgroundUrl={`../${PaperImage}`}
      />
      <Option
        team={team}
        percentage={33}
        voteCount={votes ? votes[2] : '0'}
        backgroundUrl={`../${ScissorImage}`}
      />
    </div>
  </div>
);

export default Ballot;
