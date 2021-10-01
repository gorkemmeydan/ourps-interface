import { useContractCall } from '@usedapp/core';
import { utils } from 'ethers';
import OURPS_ABI from '../contracts/ourps/ourps.abi';
import OURPS_ADRESS from '../contracts/ourps/ourps.adtress';

interface History {
  red: number;
  blue: number;
  draw: number;
}

const useRoundHistory = (): History | undefined => {
  const ourpsInterface = new utils.Interface(OURPS_ABI);
  const contractAdress = OURPS_ADRESS;

  const history =
    useContractCall({
      abi: ourpsInterface, // ABI interface of the called contract
      address: contractAdress, // On-chain address of the deployed contract
      method: 'getResults', // Method to be called
      args: [],
    }) ?? [];

  if (history === undefined) return undefined;

  const historyArr = history.toString().split(',');

  const roundHistory = {
    red: parseInt(historyArr[0], 10),
    blue: parseInt(historyArr[1], 10),
    draw: parseInt(historyArr[2], 10),
  };

  return roundHistory;
};

export default useRoundHistory;
