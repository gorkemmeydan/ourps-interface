import { useContractCall } from '@usedapp/core';
import { utils } from 'ethers';
import OURPS_ABI from '../contracts/ourps/ourps.abi';
import OURPS_ADRESS from '../contracts/ourps/ourps.adtress';

const useRoundEndTimestamp = (): number | undefined => {
  const ourpsInterface = new utils.Interface(OURPS_ABI);
  const contractAdress = OURPS_ADRESS;

  const [timeStamp] =
    useContractCall({
      abi: ourpsInterface, // ABI interface of the called contract
      address: contractAdress, // On-chain address of the deployed contract
      method: 'getRoundEndTimestamp', // Method to be called
      args: [],
    }) ?? [];

  if (timeStamp === undefined) return undefined;
  return parseInt(timeStamp.toString(), 10);
};

export default useRoundEndTimestamp;
