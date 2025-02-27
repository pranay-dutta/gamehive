import { GameQuery } from "@/App";
import ms from "ms";
import APIClient, { FetchResponse } from "@/services/api-client";
import { Game } from "@/services/game-service";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchGames = async (
  gameQuery: GameQuery | null,
  pageParam: number
): Promise<FetchResponse<Game>> => {
  const apiClient = new APIClient<FetchResponse<Game>>("/games");

  return apiClient.get({
    params: {
      genres: gameQuery?.genreId,
      parent_platforms: gameQuery?.platformId,
      ordering: gameQuery?.ordering,
      search: gameQuery?.query,
      page: pageParam,
    },
  });
};

const useGames = (gameQuery: GameQuery | null) => {
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
