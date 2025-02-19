import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score >= 80 ? "green" : score >= 60 ? "yellow" : "red";
  return (
    <Badge colorPalette={color}>{score ? "Rating: " + score : "Unrated"}</Badge>
  );
};

export default CriticScore;
