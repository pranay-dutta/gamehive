import { Platform } from "@/hooks/usePlatforms";
import APIClient from "@/services/api-client2";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const useOrdering = () =>
  useQuery<Platform, Error>({
    queryKey: ["ordering"],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000, //1d
  });
export default useOrdering;
