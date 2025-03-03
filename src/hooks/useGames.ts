import APIClient from "@/services/api-client";
import { FetchResponse } from "@/entitites/FetchResponse";
import { Game } from "@/entitites/Game";
import useGameQueryStore, { GameQuery } from "@/store";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";

const fetchGames = async (
  gameQuery: GameQuery,
  pageParam: number
): Promise<FetchResponse<Game>> => {
  const apiClient = new APIClient<Game>("/games");

  return apiClient.getAll({
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
  
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => fetchGames(gameQuery, pageParam as number),
    initialPageParam: 1, // Starting page
    staleTime: ms("1d"),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};
export default useGames;
