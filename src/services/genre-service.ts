import APIClient, { FetchResponse } from "./api-client";
interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export default new APIClient<FetchResponse<Genre>>("/genres");
export type { Genre };

