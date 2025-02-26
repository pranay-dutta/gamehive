import axios, { AxiosRequestConfig, CanceledError, AxiosError } from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "71322099c64f462280ef4cfd175662c8",
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
  get = async (params: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, params).then((res) => res.data);
  };
  getAll = async () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };
  post = async (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}
export default APIClient;
export { CanceledError, AxiosError };
