import { GameQuery } from "@/App";
import useGames from "@/hooks/useGames";
import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import { GameCard, GameCardSkeleton } from "./";
import { Fragment } from "react/jsx-runtime";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery | null;
}
const GameGrid = ({ gameQuery }: Props) => {
  const {
    error,
    data,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const fetchGameCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchGameCount}
        hasMore={hasNextPage}
        next={fetchNextPage}
        loader={isFetchingNextPage && <Spinner size="md" />}
        style={{ overflow: "unset" }}
      >
        <Box mb={3}>
          {error && <p>Error: {error.message}</p>}
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={6}>
            {isLoading &&
              skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

            {data?.pages.map((page, index) => (
              <Fragment key={index}>
                {page?.results.map((game) => (
                  <GameCard game={game} key={game.id} />
                ))}
              </Fragment>
            ))}
          </SimpleGrid>
        </Box>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
