import { useContractCall } from '@usedapp/core';
import { utils } from 'ethers';
import OURPS_ABI from '../contracts/ourps/ourps.abi';
import OURPS_ADRESS from '../contracts/ourps/ourps.adtress';

interface Props {
  team: 'red' | 'blue';
}

const useTeamVotes = ({ team }: Props): string[] | undefined => {
  const ourpsInterface = new utils.Interface(OURPS_ABI);
  const contractAdress = OURPS_ADRESS;
  let queryTeam = -1;
  if (team === 'red') queryTeam = 0;
  if (team === 'blue') queryTeam = 1;

  const votes =
    useContractCall({
      abi: ourpsInterface, // ABI interface of the called contract
      address: contractAdress, // On-chain address of the deployed contract
      method: 'getVotes', // Method to be called
      args: [queryTeam],
    }) ?? [];

  if (votes === undefined) return undefined;

  return votes.toString().split(',');
};

export default useTeamVotes;
