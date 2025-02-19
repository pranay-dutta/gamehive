import { Genre } from "@/services/genre-service";
// import useData2 from "./useData2";
import { Game, Platform } from "@/services/game-service";
import { useEffect, useState } from "react";
import { AxiosError, CanceledError } from "axios";
import apiClient from "@/services/api-client";
import { FetchResponse } from "@/services/data-service";

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  const [data, setData] = useState<Game[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<Game>>("/games", {
        signal: controller.signal,
        params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id },
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
  }, [selectedGenre, selectedPlatform]);

  return { data, error, loading };
};

export default useGames;
