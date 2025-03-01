import APIClient, { FetchResponse } from "@/services/api-client";
import { Game } from "@/services/game-service";
import useGameQueryStore, { GameQuery } from "@/store";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";

const fetchGames = async (
  gameQuery: GameQuery,
  pageParam: number
): Promise<FetchResponse<Game>> => {
  const apiClient = new APIClient<FetchResponse<Game>>("/games");

  return apiClient.get({
    params: {
      genres: gameQuery.genreId,
      parent_platforms: gameQuery.platformId,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      page: pageParam,
    },
  });
};

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => fetchGames(gameQuery, pageParam),
    initialPageParam: 1, // Starting page
    staleTime: ms("1d"),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};
export default useGames;
