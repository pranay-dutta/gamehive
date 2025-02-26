import { useEffect, useState } from "react";
import dataService, { FetchResponse } from "@/services/unused/data-service";
import { AxiosError, CanceledError } from "@/services/unused/api-client";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = dataService(endpoint).get<FetchResponse<T>>();
    request
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
        setLoading(false);
      });
    // .finally(() => setLoading(false));

    return () => cancel();
  }, [endpoint]);

  return { data, error, loading };
};

export default useData;
