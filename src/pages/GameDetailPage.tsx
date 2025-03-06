import { ExpandableText } from "@/components";
import GameAttributes from "@/components/GameAttributes";
import GameScreenshots from "@/components/GameScreenshots";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug);

  if (isLoading) return <Spinner />;
  if (error || !game) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} mt={10}>
      <Box>
        <Heading mb={5} size="5xl">
          {game?.name}
        </Heading>
        <ExpandableText children={game?.description_raw} />
        <GameAttributes game={game} />
      </Box>
      <Box>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
