import { FetchResponse } from "@/entitites/FetchResponse";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "@/entitites/Screenshot";
import ms from "ms";

const useGamescreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`games/${gameId}/screenshots`);

  return useQuery<FetchResponse<Screenshot>, Error>({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"),
  });
};
export default useGamescreenshots;
