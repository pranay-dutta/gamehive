import Game from "@/entitites/Game";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug?: string) => {
  return useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    // retry: 3,
    staleTime: ms("1d"),
  });
};

export default useGame;
