import FetchResponse from "@/entitites/FetchResponse";
import Trailer from "@/entitites/Trailer";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useGameTrailer = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ["trailer", gameId],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("1d"),
  });
};
export default useGameTrailer;
