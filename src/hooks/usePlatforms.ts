import { useQuery } from "@tanstack/react-query";
import platforms from "@/data/platforms";
import platformService, { Platform } from "@/services/platform-service";
import { FetchResponse } from "@/services/data-service";

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: platformService.get,
    refetchInterval: 60 * 60 * 1000, // refetch every hour
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platforms.length, results: platforms },
  });

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
export default usePlatforms;
