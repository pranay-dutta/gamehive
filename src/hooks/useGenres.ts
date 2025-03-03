import genres from "@/data/genres";
import { FetchResponse } from "@/entitites/FetchResponse";
import { Genre } from "@/entitites/Genre";
import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/api-client";
import ms from "ms";

const useGenres = () => {
  const apiClient = new APIClient<Genre>("/genres");
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    retry: 3,
    staleTime: ms("1d"),
    initialData: genres,
  });
};

export default useGenres;
