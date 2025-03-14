import FetchResponse from "@/entitites/FetchResponse";
import axios, { AxiosRequestConfig, CanceledError, AxiosError } from "axios";
const { VITE_RAWG_API } = import.meta.env;

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: VITE_RAWG_API,
  },
  headers: {
    Accept: "application/json",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = async (slug?: string | number) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + slug)
      .then((res) => res.data);
  };

  getAll = async (params?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, params)
      .then((res) => res.data);
  };
  post = async (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}
export default APIClient;
export { CanceledError, AxiosError };
