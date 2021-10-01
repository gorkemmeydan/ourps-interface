import React from 'react';

import RockImage from '../../assets/rock-image.png';
import PaperImage from '../../assets/paper-image.png';
import ScissorImage from '../../assets/scissor-image.png';

import Option from './option-container/option.component';

import styles from './ballot.module.scss';
import calcVotePercentage from '../../utils/calcVotePercentage.util';

interface Props {
  team: 'red' | 'blue';
  votes: {
    rock: number;
    paper: number;
    scissors: number;
  };
}

const Ballot: React.FC<Props> = ({ team, votes }: Props) => {
  const votePercentages = calcVotePercentage(votes);

  return (
    <div className={`${styles[team]} ${styles.ballot}`}>
      <div className={styles.teamName}>{team.toUpperCase()}</div>
      <div className={styles.rpsContainer}>
        <Option
          team={team}
          percentage={votePercentages.rock}
          voteCount={votes.rock}
          backgroundUrl={`../${RockImage}`}
        />
        <Option
          team={team}
          percentage={votePercentages.paper}
          voteCount={votes.paper}
          backgroundUrl={`../${PaperImage}`}
        />
        <Option
          team={team}
          percentage={votePercentages.scissors}
          voteCount={votes.scissors}
          backgroundUrl={`../${ScissorImage}`}
        />
      </div>
    </div>
  );
};

export default Ballot;
