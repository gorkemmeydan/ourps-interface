import { Contract, ethers } from 'ethers';
import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

import styles from './option.module.scss';

interface Props {
  team: 'red' | 'blue';
  rps: 'rock' | 'paper' | 'scissors';
  percentage: number;
  voteCount: number;
  backgroundUrl: string;
  contract: Contract | undefined;
  deactive: boolean;
}

const Option: React.FC<Props> = ({
  team,
  rps,
  percentage,
  voteCount,
  backgroundUrl,
  contract,
  deactive,
}: Props) => {
  const [showAlert, setShowAlert] = useState(false);

  const voteForOption = async () => {
    let teamId = -1;
    let ballotRps = -1;
    const overrides = {
      value: ethers.utils.parseEther('0.1'),
    };

    if (contract) {
      if (team === 'red') {
        teamId = await contract.RED();
      } else {
        teamId = await contract.BLUE();
      }

      if (rps === 'rock') {
        ballotRps = await contract.ROCK();
      } else if (rps === 'paper') {
        ballotRps = await contract.PAPER();
      } else {
        ballotRps = await contract.SCISSORS();
      }

      try {
        const voteTxn = await contract.vote(teamId, ballotRps, overrides);
        await voteTxn.wait();
      } catch (e) {
        // eslint-disable-next-line
        console.log(e);
      }
    }
  };

  const handleVoting = async () => {
    if (deactive) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      await voteForOption();
    }
  };

  const renderAlert = () => {
    if (showAlert) {
      return (
        <ToastContainer className='p-2' position='middle-center'>
          <Toast bg='warning' onClose={() => setShowAlert(false)}>
            <Toast.Header closeButton />
            <Toast.Body>
              You must process round to vote for an option!
            </Toast.Body>
          </Toast>
        </ToastContainer>
      );
    }
    return null;
  };

  return (
    <div className={`${styles[team]} ${styles.option}`}>
      <button
        className={styles.imageContainer}
        onClick={handleVoting}
        type='button'
      >
        <img
          className={styles.rpsImage}
          src={backgroundUrl}
          alt='rock-paper-scissors'
        />
      </button>
      <div className={styles.optionPercentage}>{percentage}%</div>
      <div className={styles.voteCount}>({voteCount})</div>
      {renderAlert()}
    </div>
  );
};

export default Option;
