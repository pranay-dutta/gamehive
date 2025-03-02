import gameDetailService, { GameDetail } from "@/services/game-detail-service";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useGameDetail = (slug?: string) => {
  return useQuery<GameDetail, Error>({
    queryKey: ["gameDetail", slug],
    queryFn: () => gameDetailService.getSpecific(slug),
    retry: 3,
    staleTime: ms("1d"),
  });
};

export default useGameDetail;
