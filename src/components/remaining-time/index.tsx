import { Contract } from 'ethers';
import React, { useEffect, useState } from 'react';
import LoadingIndicator from '../loading-indicator';

import styles from './remaining-time.module.scss';

interface Props {
  contract: Contract | undefined;
  setRoundEndStatus: (arg: boolean) => void;
}

const RemainingTime: React.FC<Props> = ({
  contract,
  setRoundEndStatus,
}: Props) => {
  const [roundEndTime, setRoundEndTime] = useState(0);
  const [timerString, setTimerString] = useState('');
  const [processing, setProcessing] = useState(false);
  const [roundEnded, setRoundEnded] = useState(true);

  const getEndTime = async () => {
    if (contract) {
      const endTime = await contract.getRoundEndTimestamp();
      setRoundEndTime(parseInt(endTime.toString(), 10) * 1000);
    }
  };

  const processRoundHandler = async () => {
    if (contract) {
      try {
        setProcessing(true);
        const roundTxn = await contract.endRound();
        await roundTxn.wait();
      } catch {
        setProcessing(false);
      }
      setProcessing(false);
    }
  };

  useEffect(() => {
    getEndTime();
  }, []);

  useEffect(() => {
    const onRoundEnd = () => {
      // eslint-disable-next-line
      getEndTime();
    };

    if (contract) {
      contract.on('RoundEnded', onRoundEnd);
    }

    return () => {
      // when component unmount, get rid of event listener
      if (contract) {
        contract.off('RoundEnded', onRoundEnd);
      }
    };
  }, [contract]);

  useEffect(() => {
    // Use setInterval to run this piece of code every second
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const distance = roundEndTime - currentDate;

      // Here it's as easy as doing some time math to get the different properties
      // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      // const hours = Math.floor(
      //   (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      // );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // We have our desired output, set it in state!
      setTimerString(`${minutes} min ${seconds} sec`);

      // If our distance passes zero this means that it's drop time!
      if (distance < 0) {
        clearInterval(interval);
        setRoundEnded(true);
        setRoundEndStatus(true);
      } else {
        setRoundEnded(false);
        setRoundEndStatus(false);
      }
    }, 1000);

    // Anytime our component unmounts let's clean up our interval
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [roundEndTime]);

  const renderButton = () => {
    if (processing) {
      return <LoadingIndicator />;
    }
    return (
      <button
        type='button'
        className={styles.processRoundButton}
        onClick={processRoundHandler}
      >
        Process Round
      </button>
    );
  };

  return !roundEnded ? (
    <div className={styles.timerContainer}>
      <p className={styles.timerHeader}>Remaining Time until Round End</p>
      {timerString && (
        <p className={styles.timerValue}>{`⏰ ${timerString}`}</p>
      )}
    </div>
  ) : (
    <div className={styles.timerContainer}>
      <p className={styles.timerHeader}>Process Round to Start a New One</p>
      {renderButton()}
    </div>
  );
};

export default RemainingTime;
