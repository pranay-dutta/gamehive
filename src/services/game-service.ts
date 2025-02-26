import APIClient from "./api-client2";
import { FetchResponse } from "@/services/api-client2";
import { Platform } from "@/hooks/usePlatforms";
interface Game {
  id: number;
  name: string;
  background_image: string; //url
  parent_platforms?: { platform: Platform }[];
  metacritic: number;
}

export default new APIClient<FetchResponse<Game>>("/games");
export type { Game };
