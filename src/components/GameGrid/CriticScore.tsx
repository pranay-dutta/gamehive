import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score >= 80 ? "green" : score >= 60 ? "yellow" : "red";
  return (
    <Badge size="lg" colorPalette={color}>
      {score ? score : "Unrated"}
    </Badge>
  );
};

export default CriticScore;
