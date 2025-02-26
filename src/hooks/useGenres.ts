import genreService, { Genre } from "@/services/genre-service";
import { FetchResponse } from "@/services/data-service";
import { useQuery } from "@tanstack/react-query";
import genres from "@/data/genres";

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
