import React from 'react';

import './ballot.styles.scss';

import RockImage from '../../assets/rock-image.png';
import PaperImage from '../../assets/paper-image.png';
import ScissorImage from '../../assets/scissor-image.png';

import Option from './option-container/option.component';

interface Props {
  team: 'red' | 'blue';
}

const Ballot: React.FC<Props> = ({ team }: Props) => (
  <div className={`${team} ballot`}>
    <div className='team-name'>{team.toUpperCase()}</div>
    <div className='rps-container'>
      <Option
        team={team}
        percentage={33}
        voteCount={2}
        backgroundUrl={`../${RockImage}`}
      />
      <Option
        team={team}
        percentage={33}
        voteCount={2}
        backgroundUrl={`../${PaperImage}`}
      />
      <Option
        team={team}
        percentage={33}
        voteCount={2}
        backgroundUrl={`../${ScissorImage}`}
      />
    </div>
  </div>
);

export default Ballot;
