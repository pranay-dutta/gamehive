import genres from "@/data/genres";
import { FetchResponse } from "@/services/api-client";
import genreService, { Genre } from "@/services/genre-service";
import { useQuery } from "@tanstack/react-query";

const useGenre = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genreService.get,
    retry: 3,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenre;
