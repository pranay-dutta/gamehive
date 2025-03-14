import platforms from "@/data/platforms";
import APIClient from "@/services/api-client";
import FetchResponse from "@/entitites/FetchResponse";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    refetchInterval: 60 * 60 * 1000, // refetch every hour
    staleTime: ms("1d"),
    initialData: platforms,
  });

export default usePlatforms;
