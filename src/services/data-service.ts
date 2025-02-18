import create from "./http-service";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
export default (endpoint: string) => create(endpoint);
