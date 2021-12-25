import React, { useEffect, useState } from 'react';

import { Contract } from '@ethersproject/contracts';

import RockImage from '../../assets/rock-image.png';
import PaperImage from '../../assets/paper-image.png';
import ScissorImage from '../../assets/scissor-image.png';

import Option from './option-container/option.component';

import styles from './ballot.module.scss';
import calcVotePercentage from '../../utils/calcVotePercentage.util';

interface Props {
  team: 'red' | 'blue';
  contract: Contract | undefined;
  deactive: boolean;
}

interface IVote {
  rock: number;
  paper: number;
  scissors: number;
}

const Ballot: React.FC<Props> = ({ team, contract, deactive }: Props) => {
  const [votes, setVotes] = useState<IVote>({ rock: 0, paper: 0, scissors: 0 });
  const [votePercentages, setVotePercentages] = useState<IVote>({
    rock: 0,
    paper: 0,
    scissors: 0,
  });

  const getVotes = async () => {
    if (contract) {
      let teamId = -1;

      if (team === 'red') {
        teamId = 0;
      } else {
        teamId = 1;
      }

      let currentVotes = await contract.getVotes(teamId);
      currentVotes = currentVotes.toString().split(',');
      setVotes({
        rock: parseInt(currentVotes[0], 10),
        paper: parseInt(currentVotes[1], 10),
        scissors: parseInt(currentVotes[2], 10),
      });
    }
  };

  useEffect(() => {
    // set interval to get votes evey 10 secs
    const interval = setInterval(() => {
      getVotes();
    }, 5000);

    return () => {
      // get rid of interval when component unmounts
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  useEffect(() => {
    setVotePercentages(calcVotePercentage(votes));
  }, [votes]);

  return (
    <div className={`${styles[team]} ${styles.ballot}`}>
      <div className={styles.teamName}>{team.toUpperCase()}</div>
      <div className={styles.rpsContainer}>
        <Option
          team={team}
          rps='rock'
          percentage={votePercentages.rock}
          voteCount={votes.rock}
          backgroundUrl={`../${RockImage}`}
          contract={contract}
          deactive={deactive}
        />
        <Option
          team={team}
          rps='paper'
          percentage={votePercentages.paper}
          voteCount={votes.paper}
          backgroundUrl={`../${PaperImage}`}
          contract={contract}
          deactive={deactive}
        />
        <Option
          team={team}
          rps='scissors'
          percentage={votePercentages.scissors}
          voteCount={votes.scissors}
          backgroundUrl={`../${ScissorImage}`}
          contract={contract}
          deactive={deactive}
        />
      </div>
    </div>
  );
};

export default Ballot;
