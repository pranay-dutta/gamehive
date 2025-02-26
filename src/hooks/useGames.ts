import gameService, { Game } from "@/services/game-service";
import { FetchResponse } from "@/services/data-service";
import { GameQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";

const fetchGames = async ( selectedQuery: GameQuery | null): Promise<FetchResponse<Game>> => {
  return gameService.get({
    params: {
      genres: selectedQuery?.genre?.id,
      platforms: selectedQuery?.platform?.id,
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
