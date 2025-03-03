import { ExpandableText } from "@/components";
import GameAttributes from "@/components/GameAttributes/GameAttributes";
import useGame from "@/hooks/useGame";
import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug);

  if (error || !game) return null;

  return (
    <Box>
      <Heading mb={5} size="5xl">
        {isLoading ? "Loading ..." : game?.name}
      </Heading>
      <ExpandableText children={game?.description_raw} />
      <GameAttributes game={game}/>
    </Box>
  );
};

export default GameDetailPage;
