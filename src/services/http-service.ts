import apiClient from "./api-client";

class HttpService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get<T>() {
    const controler = new AbortController();
    const request = apiClient.get<T>(this.endpoint, {
      signal: controler.signal,
    });
    const cancel = () => controler.abort();
    return { request, cancel };
  }

  getAll<T>() {
    const controler = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controler.signal,
    });
    const cancel = () => controler.abort();
    return { request, cancel };
  }
}

const create = (endpoint: string) => new HttpService(endpoint);
export default create;
