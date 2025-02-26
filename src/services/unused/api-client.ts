import axios from "axios";
import { CanceledError, AxiosError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "71322099c64f462280ef4cfd175662c8",
  },
  headers: {
    Accept: "application/json",
  },
});

export { CanceledError, AxiosError };
