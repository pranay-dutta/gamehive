import { GameQuery } from "@/App";
import APIClient, { FetchResponse } from "@/services/api-client";
import { Game } from "@/services/game-service";
import { useQuery } from "@tanstack/react-query";

const fetchGames = async ( selectedQuery: GameQuery | null): Promise<FetchResponse<Game>> => {
  const apiClient = new APIClient<FetchResponse<Game>>("/games");

  return apiClient.get({
    params: {
      genres: selectedQuery?.genre?.id,
      parent_platforms: selectedQuery?.platform?.id,
      ordering: selectedQuery?.ordering,
      search: selectedQuery?.query,
    },
  });
};

const useGames = (selectedQuery: GameQuery | null) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", selectedQuery],
    queryFn: () => fetchGames(selectedQuery),
    staleTime: 60 * 1000, // 1 minute
  });

export default useGames;
