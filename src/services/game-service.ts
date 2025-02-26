import { Platform } from "@/hooks/usePlatforms";
import APIClient, { FetchResponse } from "@/services/api-client";
interface Game {
  id: number;
  name: string;
  background_image: string; //url
  parent_platforms?: { platform: Platform }[];
  metacritic: number;
}

export default new APIClient<FetchResponse<Game>>("/games");
export type { Game };
