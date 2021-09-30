import { useContractCall } from '@usedapp/core';
import { utils } from 'ethers';
import OURPS_ABI from '../contracts/ourps/ourps.abi';
import OURPS_ADRESS from '../contracts/ourps/ourps.adtress';

const useRedTeamVotes = (): number[] | undefined => {
  const ourpsInterface = new utils.Interface(OURPS_ABI);
  const contractAdress = OURPS_ADRESS;
  const team = 0; //  RED

  const [votes] =
    useContractCall({
      abi: ourpsInterface, // ABI interface of the called contract
      address: contractAdress, // On-chain address of the deployed contract
      method: 'getVotes', // Method to be called
      args: [team],
    }) ?? [];

  if (votes === undefined) return undefined;

  // eslint-disable-next-line no-console
  console.log(votes);

  return undefined;
  /*
  const intVotes: number[] = [];
  votes.array.forEach((element: number) =>
    intVotes.push(parseInt(element.toString(), 10)),
  );
  return intVotes;
  */
};

export default useRedTeamVotes;
