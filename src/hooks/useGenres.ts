import { useEffect, useState } from "react";
import { AxiosError, CanceledError } from "axios";

import genereService, { Genre } from "@/services/genre-service";
import Data from "@/services/data-service";

const useGenere = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = genereService.get<Data<Genre>>();
    request
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { genres, error, loading };
};
export default useGenere;
