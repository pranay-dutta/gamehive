import genres from "@/data/genres";
import { FetchResponse } from "@/services/api-client";
import genreService, { Genre } from "@/services/genre-service";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genreService.get,
    retry: 3,
    staleTime: ms("1d"),
    initialData: genres,
  });
};

export default useGenres;
