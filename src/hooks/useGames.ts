import { useEffect, useState } from "react";
import gameService, { Game } from "@/services/game-service";
import Data from "@/services/data-service";
import { AxiosError, CanceledError } from "@/services/api-client";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gameService.get<Data<Game>>();
    request
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
        setLoading(false);
      });
    // .finally(() => setLoading(false));

    return () => cancel();
  }, []);

  return { games, error, loading };
};

export default useGames;
