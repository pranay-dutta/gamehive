import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import { GameCard, GameCardSkeleton } from "./";

const GameGrid = () => {
  const { error, games, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  return (
    <>
      {error && <p>Error: {error.message}</p>}

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        p={2}
        gap="30px"
        width={"100%"}
        justifyItems="center"
      >
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games && games.map((g) => <GameCard game={g} key={g.id} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
