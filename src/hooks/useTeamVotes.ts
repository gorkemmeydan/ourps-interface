import { useContractCall } from '@usedapp/core';
import { utils } from 'ethers';
import OURPS_ABI from '../contracts/ourps/ourps.abi';
import OURPS_ADRESS from '../contracts/ourps/ourps.adtress';

interface Props {
  team: 'red' | 'blue';
}

interface Votes {
  rock: number;
  paper: number;
  scissors: number;
}

const useTeamVotes = ({ team }: Props): Votes => {
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

  if (votes === undefined) {
    const noConnectionVotes = {
      rock: 0,
      paper: 0,
      scissors: 0,
    };
    return noConnectionVotes;
  }

  const voteArr = votes.toString().split(',');

  const connectedVotes = {
    rock: parseInt(voteArr[0], 10),
    paper: parseInt(voteArr[0], 10),
    scissors: parseInt(voteArr[0], 10),
  };

  return connectedVotes;
};

export default useTeamVotes;
