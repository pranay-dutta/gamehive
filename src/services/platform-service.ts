import APIClient from "./api-client2";
import { FetchResponse } from "./data-service";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default new APIClient<FetchResponse<Platform>>("/platforms/lists/parents");
export type { Platform };
