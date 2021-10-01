interface Props {
  rock: number;
  paper: number;
  scissors: number;
}

interface Percentages {
  rock: number;
  paper: number;
  scissors: number;
}

const calcVotePercentage = ({ rock, paper, scissors }: Props): Percentages => {
  const total = rock + paper + scissors;

  if (total === 0) {
    const noVotePercentages = {
      rock: 33.33,
      paper: 33.33,
      scissors: 33.33,
    };
    return noVotePercentages;
  }

  const votePercentages = {
    rock: parseInt((rock / total).toFixed(2), 10),
    paper: parseInt((paper / total).toFixed(2), 10),
    scissors: parseInt((scissors / total).toFixed(2), 10),
  };

  return votePercentages;
};

export default calcVotePercentage;
