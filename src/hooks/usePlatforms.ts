import platforms from "@/data/platforms";
import APIClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<FetchResponse<Platform>>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.get,
    refetchInterval: 60 * 60 * 1000, // refetch every hour
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platforms.length, next: null, results: platforms },
  });

export default usePlatforms;
