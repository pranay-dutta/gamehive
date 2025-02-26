import APIClient from "./api-client2";
import { FetchResponse } from "./api-client2";
interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export default new APIClient<FetchResponse<Genre>>("/genres");
export type { Genre };
