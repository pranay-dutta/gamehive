import { Game } from "@/services/game-service";
import { useEffect, useState } from "react";
import { AxiosError, CanceledError } from "axios";
import apiClient from "@/services/api-client";
import { FetchResponse } from "@/services/data-service";
import { GameQuery } from "@/App";

const useGames = (selectedQuery: GameQuery | null) => {
  const [data, setData] = useState<Game[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<Game>>("/games", {
        signal: controller.signal,
        params: {
          genres: selectedQuery?.genre?.id,
          platforms: selectedQuery?.platform?.id,
          ordering: selectedQuery?.ordering,
          search: selectedQuery?.query,
        },
      })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
        setLoading(false);
      });

    return () => controller.abort();
  }, [selectedQuery]);

  return { data, error, loading };
};

export default useGames;
