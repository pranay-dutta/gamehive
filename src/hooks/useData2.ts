import apiClient from "@/services/api-client";
import { FetchResponse } from "@/services/data-service";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";

const useData2 = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
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
  }, [...(deps || [])]);
  return { data, error, loading };
};

export default useData2;
