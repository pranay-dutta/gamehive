import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import { GameCard, GameCardSkeleton } from "./";
import { Genre } from "@/services/genre-service";
import { Platform } from "@/services/game-service";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { error, data, loading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  return (
    <>
      {error && <p>Error: {error.message}</p>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        gap={6}
      >
        {loading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data && !loading && data.map((game) => <GameCard game={game} key={game.id} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
